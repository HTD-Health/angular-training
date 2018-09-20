import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable()

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
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    addManyIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients)
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    getChosenIngredient(index: number) {
        return this.ingredients[index]
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient
        this.ingredientsChanged.next(this.getIngredients())
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1)
        this.ingredientsChanged.next(this.getIngredients())
    }

    updateAllIngredients(ingredients: Ingredient[]) {
        this.ingredients = ingredients
        this.ingredientsChanged.next(this.getIngredients())
    }

    ingredientsChanged = new Subject<Ingredient[]>()

    startedEditing = new Subject<number>()

}