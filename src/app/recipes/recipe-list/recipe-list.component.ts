import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() checkRecipeDetail = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe('Testrecipe', 'testdescription', 'https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_1280.jpg'),
    new Recipe('Testrecipe2', 'testdescription2', 'https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_1280.jpg')
  ];

  constructor() { }

  ngOnInit() {

  }

  onRecipeSelected(recipe: Recipe) {
    this.checkRecipeDetail.emit(recipe)
  }

}
