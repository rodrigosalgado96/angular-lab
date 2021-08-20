import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownButtonComponent } from './dropdown-button.component';



@NgModule({
  declarations: [DropdownButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [DropdownButtonComponent]
})
export class DropdownButtonModule { }
