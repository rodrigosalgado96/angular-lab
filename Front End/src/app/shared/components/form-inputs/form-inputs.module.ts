import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormButtonComponent } from './form-button/form-button.component';
import { InputNumberComponent } from './input-number/input-number.component';



@NgModule({
  declarations: [InputTextComponent, FormButtonComponent, InputNumberComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [InputTextComponent, FormButtonComponent, InputNumberComponent]
})
export class FormInputsModule {}
