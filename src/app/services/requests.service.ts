import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http'
import { RecipesService } from '../services/recipes.service';
import { ShoppingListService } from '../services/shopping-list.service';
import { Recipe } from '../shared/recipe.model'
import { Ingredient } from '../shared/ingredient.model'
import { map } from 'rxjs/operators'
import { AuthService } from "./auth.service";

@Injectable()

export class RequestsService {

    constructor(private httpClient: HttpClient, private shoppingsService: ShoppingListService, private recipesService: RecipesService, private authService: AuthService) {}

    updateData() {
        const recipes = this.recipesService.getRecipes()
        const shoppings = this.shoppingsService.getIngredients()
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
                this.shoppingsService.updateAllIngredients(shoppings)
                this.recipesService.updateAllRecipes(recipes)
                return {recipes, shoppings}
            }
        )
    }

}