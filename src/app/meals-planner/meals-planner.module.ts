import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MealsComponent } from './meals/meals.component'
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        MealsComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})

export class MealPlannerModule { }