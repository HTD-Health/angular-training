import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealsComponent } from './mealsPlan/meals/meals.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeFormComponent } from './recipes/recipe-list/recipe-form/recipe-form.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full'},
  {path: 'meals', component: MealsComponent},
  {path: 'shopping', component: ShoppingListComponent},
  {path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent},
    // {path: 'new', component: RecipeFormComponent},
    {path: ':id', component: RecipeDetailComponent},
    // {path: ':id/edit', component: RecipeFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
