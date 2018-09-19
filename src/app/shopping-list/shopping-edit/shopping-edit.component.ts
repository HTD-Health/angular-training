import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('shoppingForm') shoppingForm: NgForm

  subscription: Subscription
  editMode: boolean = false
  editedItemIndex: number
  editedItem: Ingredient

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index
        this.editMode = true
        this.editedItem = this.shoppingListService.getChosenIngredient(index)
        this.shoppingForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    )
  }

  onSubmit(form: NgForm) {
    const newIngredient = new Ingredient(form.value.name, form.value.amount)
    if(this.editedItem) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient)
    }
    else {
      this.shoppingListService.addIngredient(newIngredient)
    }
    this.editMode = false
    form.reset()
  }

  onClear() {
    this.shoppingForm.reset()
    this.editMode = false
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex)
    this.onClear()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
