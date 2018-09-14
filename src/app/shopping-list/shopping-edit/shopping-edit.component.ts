import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef
  @ViewChild('amountInput') amountInputRef: ElementRef
  @Output() onCreatingIngedient = new EventEmitter<Ingredient>()

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onIngredientAdded() {
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value)
    this.shoppingListService.addIngredient(newIngredient)
  }

}
