import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MqttComponent } from './mqtt.component';

import { MqttModule, IMqttServiceOptions } from "ngx-mqtt";
import { FormsModule } from '@angular/forms';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'localhost',
  port: 9001,
  path: ''
}

@NgModule({
  declarations: [MqttComponent],
  imports: [
    CommonModule,
    FormsModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
  ]
})
export class MqttTestModule { }
