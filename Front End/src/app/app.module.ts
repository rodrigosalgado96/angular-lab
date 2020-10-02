import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./core/core.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { DragulaModule } from "ng2-dragula";
import { FeaturesModule } from "./features/features.module";
import { DragAndDropModule } from "./features/drag-and-drop/drag-and-drop.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    CoreModule,
    FeaturesModule,
    FormsModule,
    ReactiveFormsModule,
    DragAndDropModule,
    DragulaModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
