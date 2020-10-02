import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { Subscription } from "rxjs";
import { MqttService, IMqttMessage } from "ngx-mqtt";

@Component({
  selector: "app-mqtt",
  templateUrl: "./mqtt.component.html",
  styleUrls: ["./mqtt.component.scss"],
})
export class MqttComponent implements OnInit, OnDestroy {
  /*
   available variables:
     -current_level;
     -temperature_level;

  hostname: '172.25.90.83', Caio
  hostname: '172.25.87.113', Allan

  port: 1883,

    example: https://medium.com/@anant.lalchandani/dead-simple-mqtt-example-over-websockets-in-angular-b9fd5ff17b8e
  */

  private subscription: Subscription;
  topicname: any;
  msg: any;
  isConnected: boolean = false;
  @ViewChild("msglog", { static: true }) msglog: ElementRef;

  constructor(private _mqttService: MqttService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if(this.subscription !== undefined) this.subscription.unsubscribe();
  }

  subscribeNewTopic(): void {
    console.log("inside subscribe new topic");
    this.subscription = this._mqttService
      .observe(this.topicname)
      .subscribe((message: IMqttMessage) => {
        this.msg = message;
        console.log("msg: ", message);
        this.logMsg(
          "Message: " +
            message.payload.toString() +
            "<br> for topic: " +
            message.topic
        );
      });
    this.logMsg("subscribed to topic: " + this.topicname);
  }

  sendmsg(): void {
    // use unsafe publish for non-ssl websockets
    this._mqttService.unsafePublish(this.topicname, this.msg, {
      qos: 1,
      retain: true,
    });
    this.msg = "";
  }

  logMsg(message): void {
    this.msglog.nativeElement.innerHTML += "<br><hr>" + message;
  }

  clear(): void {
    this.msglog.nativeElement.innerHTML = "";
  }
}
