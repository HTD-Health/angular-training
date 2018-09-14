import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../shared/recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable()

export class RecipesService {

    constructor(private shoppingListService: ShoppingListService) {}
    
    private recipes: Recipe[] = [
        new Recipe(
            'Tomato soup',
            'Super-tasty tomato soup',
            'https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_1280.jpg',
            [
                new Ingredient('Tomatoes', 10),
                new Ingredient('Onion', 1),
                new Ingredient('Carrot', 1)
            ]
        ),
        new Recipe(
            'Burger',
            'Big burger',
            'https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_1280.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Buns', 2)
            ]
        )
      ]

    getRecipes() {
        return this.recipes.slice()
    }

    addIngToList(ingredients: Ingredient[]) {
        this.shoppingListService.addManyIngredients(ingredients)
    }

    recipeSelected = new EventEmitter<Recipe>()

}