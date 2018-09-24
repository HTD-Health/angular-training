import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { MealService } from './services/meal.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListService } from './services/shopping-list.service';
import { RecipesService } from './services/recipes.service';
import { RequestsService } from './services/requests.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { MealPlannerModule } from './meals-planner/meals-planner.module'
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    ShoppingListModule,
    AuthModule,
    MealPlannerModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [MealService, ShoppingListService, RecipesService, RequestsService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
