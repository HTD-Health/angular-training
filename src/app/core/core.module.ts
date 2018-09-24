import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "../app-routing.module";
import { MealService } from "../services/meal.service";
import { ShoppingListService } from "../services/shopping-list.service";
import { RecipesService } from "../services/recipes.service";
import { RequestsService } from "../services/requests.service";
import { AuthService } from "../services/auth.service";

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [MealService, ShoppingListService, RecipesService, RequestsService, AuthService]
})

export class CoreModule { }