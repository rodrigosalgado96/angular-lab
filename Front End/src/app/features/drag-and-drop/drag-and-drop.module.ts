import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragAndDropComponent } from './drag-and-drop.component';
import { DragulaModule } from 'ng2-dragula';


@NgModule({
  declarations: [
    DragAndDropComponent
  ],
  imports: [
    CommonModule,
    DragulaModule
  ]
})
export class DragAndDropModule { }
