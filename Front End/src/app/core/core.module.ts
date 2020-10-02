import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterModule } from "./footer/footer.module";
import { HeaderModule } from './header/header.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderModule, FooterModule, RouterModule],
  exports: [FooterComponent, HeaderComponent]
})
export class CoreModule {}
