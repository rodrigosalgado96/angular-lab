import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MongodbComponent } from "./mongodb.component";
import { AddFormComponent } from "./add-form/add-form.component";
import { EditFormComponent } from "./edit-form/edit-form.component";
import { DeleteFormComponent } from "./delete-form/delete-form.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MongodbComponent,
    AddFormComponent,
    EditFormComponent,
    DeleteFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class MongodbModule {}
