import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ChartModule } from './chart/chart.module';
import { DragAndDropModule } from './drag-and-drop/drag-and-drop.module';
import { MqttTestModule } from './mqtt/mqtt.module';
import { SendModule } from './send/send.module';
import { SendComponent } from './send/send.component';
import { MockupsModule } from './mockups/mockups.module';
import { MongodbModule } from './mongodb/mongodb.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SendModule,
    MqttTestModule,
    ChartModule,
    DragAndDropModule,
    MockupsModule,
    MongodbModule
  ],
  exports: [
    SendComponent
  ],
})
export class FeaturesModule {}
