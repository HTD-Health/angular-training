import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/recipe.model'
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {

  chosenRecipe: Recipe

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipesService.recipeSelected
    .subscribe(
      (recipe: Recipe) => {
        this.chosenRecipe = recipe
      }
    )
  }

}
