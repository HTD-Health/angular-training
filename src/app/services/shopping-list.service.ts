import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

    private ingredients: Ingredient[] = [
        new Ingredient('testingredient', 40),
        new Ingredient('testingeredien2', 30)
    ]

    getIngredients() {
        return this.ingredients.slice()
    }

    addIngredient(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient)
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

    addManyIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients)
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

    ingredientsChanged = new EventEmitter<Ingredient[]>()

}