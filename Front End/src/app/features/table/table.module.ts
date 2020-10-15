import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragHandlerModule } from 'src/app/shared/components/drag-handler/drag-handler.module';
import { YesNoButtonGroupModule } from 'src/app/shared/components/yes-no-button-group/yes-no-button-group.module';
import { DisableControlModule } from 'src/app/shared/directives/disable-control/disable-control.module';



@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DragDropModule,
    DragHandlerModule,
    DisableControlModule
  ]
})
export class TableModule { }
