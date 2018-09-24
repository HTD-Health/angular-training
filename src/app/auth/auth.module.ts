import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SharedModule } from "../shared/shared.module";
import { AuthRoutingModule } from "./auth-routung.module";

@NgModule({
    declarations: [
        SignupComponent,
        SigninComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule
    ]
})

export class AuthModule {}