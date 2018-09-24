import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MealsComponent } from './meals/meals.component'
import { SharedModule } from "../shared/shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        MealsComponent
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        SharedModule
    ]
})

export class MealPlannerModule { }