import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealsComponent } from './meals-planner/meals/meals.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  {path: 'meals', component: MealsComponent},
  {path: 'shopping', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
