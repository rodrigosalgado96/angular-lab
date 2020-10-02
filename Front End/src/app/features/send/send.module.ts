import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SendComponent } from "./send.component";
import { SendRoutingModule } from "./send.routing.module";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [SendComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    SendRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [SendComponent]
})
export class SendModule {}
