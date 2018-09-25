import * as ShoppingListActions from './shopping-list.actions'
import { Ingredient } from '../../shared/ingredient.model'

export interface State {
    ingredients: Ingredient[],
    editedIngredient: Ingredient,
    editedIngredientIndex: number
}

export interface AppState {
    shoppingList: State
}

const initialState: State = {
    ingredients: [
        new Ingredient('testingredient', 40),
        new Ingredient('testingeredien2', 30)
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
}

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            }
        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[state.editedIngredientIndex]
            const updatedIngeredient = {
                ...ingredient,
                ...action.payload.ingredient
            }
            const updatedIngredients = [...state.ingredients]
            updatedIngredients[state.editedIngredientIndex] = updatedIngeredient
            return {
                ...state,
                ingredients: updatedIngredients,
                editedIngredient: null,
                editedIngredientIndex: -1
            }
        case ShoppingListActions.DELETE_INGREDIENT:
            const ingredientsAfterDel = [...state.ingredients]
            ingredientsAfterDel.splice(state.editedIngredientIndex, 1)
            return {
                ...state,
                ingredients: ingredientsAfterDel,
                editedIngredient: null,
                editedIngredientIndex: -1
            }
        case ShoppingListActions.START_EDIT:
            const editedIngredient = {...state.ingredients[action.payload]}
            return {
                ...state,
                editedIngredient: editedIngredient,
                editedIngredientIndex: action.payload
            }
        case ShoppingListActions.STOP_EDIT:
            return {
                ...state,
                editedIngredient: null,
                editedIngredientIndex: -1
            }
        default:
            return state
    }
}