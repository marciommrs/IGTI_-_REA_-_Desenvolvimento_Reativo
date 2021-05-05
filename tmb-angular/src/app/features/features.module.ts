import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TmbComponent } from './tmb/tmb.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
    declarations: [TmbComponent],
    exports: [
        TmbComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FeaturesModule { }
