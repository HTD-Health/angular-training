import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Testrecipe', 'testdescription', 'https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_1280.jpg'),
    new Recipe('Testrecipe2', 'testdescription2', 'https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_1280.jpg')
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.recipes);
  }

}
