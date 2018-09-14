import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../shared/recipe.model'
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }

  onAddToList() {
    this.recipesService.addIngToList(this.recipe.ingredients)
  }

}
