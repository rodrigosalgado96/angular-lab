import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ChartComponent } from "./features/chart/chart.component";
import { DragAndDropComponent } from "./features/drag-and-drop/drag-and-drop.component";
import { MqttComponent } from "./features/mqtt/mqtt.component";
import { MockupsComponent } from "./features/mockups/mockups.component";
import { MongodbComponent } from './features/mongodb/mongodb.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "mock" },
  {
    path: "chart",
    component: ChartComponent,
    data: { animation: "ChartPage" },
  },
  {
    path: "drag",
    component: DragAndDropComponent,
    data: { animation: "DragPage" },
  },
  {
    path: "mqtt",
    component: MqttComponent,
    data: { animation: "MqttPage" }
  },
  {
    path: "mock",
    component: MockupsComponent,
    data: { animation: "MockupsPage" },
  },
  {
    path: "mongodb",
    component: MongodbComponent,
    data: { animation: "MongoDBPage" },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
