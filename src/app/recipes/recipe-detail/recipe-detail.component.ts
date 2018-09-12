import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit, DoCheck {

  @Input() recipe: Recipe

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log(this.recipe)
    console.log(this.recipe.name)
  }

}
