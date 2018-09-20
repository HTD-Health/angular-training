import { Injectable } from "@angular/core";
import { Recipe } from "../shared/recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";
import { Subject } from "rxjs";

@Injectable()

export class RecipesService {

    recipesChanged = new Subject<Recipe[]>()

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

    getChosenRecipe(id: number) {
        return this.recipes[id]
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe)
        this.recipesChanged.next(this.getRecipes())
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe
        this.recipesChanged.next(this.getRecipes())
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1)
        this.recipesChanged.next(this.getRecipes())
    }

    updateAllRecipes(recipes: Recipe[]) {
        this.recipes = recipes
        this.recipesChanged.next(this.getRecipes())
    }

}