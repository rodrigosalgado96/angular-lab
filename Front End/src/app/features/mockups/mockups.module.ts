import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MockupsComponent } from "./mockups.component";
import { DragHandlerModule } from "src/app/shared/components/drag-handler/drag-handler.module";
import { YesNoButtonGroupModule } from "src/app/shared/components/yes-no-button-group/yes-no-button-group.module";
import { DisableControlModule } from 'src/app/shared/directives/disable-control/disable-control.module';
import { DropdownButtonModule } from "src/app/shared/components/dropdown-button/dropdown-button.module";
import { SlidesShowModule } from "src/app/shared/components/slides-show/slides-show.module";
import { FormInputsModule } from "src/app/shared/components/form-inputs/form-inputs.module";


@NgModule({
  declarations: [MockupsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DragDropModule,
    DragHandlerModule,
    YesNoButtonGroupModule,
    DisableControlModule,
    DropdownButtonModule,
    SlidesShowModule,
    FormInputsModule
  ],
})
export class MockupsModule {}
