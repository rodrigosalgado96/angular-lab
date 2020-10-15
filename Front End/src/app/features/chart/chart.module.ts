import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChartComponent],
  imports: [
    CommonModule,
    ChartsModule,
    FormsModule,
    MatSlideToggleModule
  ]
})
export class ChartModule {}
