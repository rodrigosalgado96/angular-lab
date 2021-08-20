import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesShowComponent } from './slides-show.component';



@NgModule({
  declarations: [SlidesShowComponent],
  imports: [
    CommonModule
  ],
  exports: [SlidesShowComponent]
})
export class SlidesShowModule { }
