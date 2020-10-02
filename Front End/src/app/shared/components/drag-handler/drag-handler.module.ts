import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DragHandlerComponent } from "./drag-handler.component";

@NgModule({
  declarations: [DragHandlerComponent],
  imports: [CommonModule],
  exports: [DragHandlerComponent],
})
export class DragHandlerModule {}
