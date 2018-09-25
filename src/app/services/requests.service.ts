import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest } from '@angular/common/http'
import { RecipesService } from '../services/recipes.service';
import { Recipe } from '../shared/recipe.model'
import { Ingredient } from '../shared/ingredient.model'
import { map } from 'rxjs/operators'
import { Subscription } from "rxjs";
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducers';
import { Store } from "@ngrx/store";

@Injectable()

export class RequestsService {

    constructor(private httpClient: HttpClient, private store: Store<fromShoppingList.AppState>, private recipesService: RecipesService) {}

    updateData() {
        let shoppings = null
        let subscription: Subscription = this.store.select('shoppingList').subscribe(
            (data) => {
                shoppings = data.ingredients
            }
        )
        const recipes = this.recipesService.getRecipes()
        const requ = new HttpRequest('PUT', 'https://ng-project-999a1.firebaseio.com/data.json', {recipes: recipes, shoppings: shoppings}, {reportProgress: true})
        return this.httpClient.request(requ)
    }

    fetchData() {
        return this.httpClient.get('https://ng-project-999a1.firebaseio.com/data.json', {
            observe: 'body',
            responseType: 'json'
        }).pipe(
            map(
                (response: {recipes: Recipe[], shoppings: Ingredient[]}) => {
                    const recipes: Recipe[] = response.recipes
                    const shoppings: Ingredient[] = response.shoppings
                    for(let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = []
                        }
                    }
                    return {recipes, shoppings}
                }
            )
        ).subscribe(
            ({recipes, shoppings}) => {
                this.recipesService.updateAllRecipes(recipes)
                return {recipes, shoppings}
            }
        )
    }

}