import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    HttpModule,
    ShoppingListModule,
    AuthModule,
    MealPlannerModule,
    CoreModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
