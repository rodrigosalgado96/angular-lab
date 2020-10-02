import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

import Telegram from "telegram-send-message";
import * as TelegramBot from "node-telegram-bot-api";


@Component({
  selector: "app-send",
  templateUrl: "./send.component.html",
  styleUrls: ["./send.component.scss"],
})
export class SendComponent implements OnInit {
  @ViewChild("inputMessage") inputMessage: ElementRef<HTMLInputElement>;

  //https://www.npmjs.com/package/node-telegram-bot-api

  answer: string = "Test answer";

  mockedDataOne = [
    { x: "OP20[C]", y: 24, z: "Automatico", count: 20 },
    { x: "OP30[C]", y: 41, z: "Semi-Automatico", count: 32 },
    { x: "OP40[C]", y: 24, z: "Automatico", count: 14 },
    { x: "OP50[C]", y: 67, z: "Manual", count: 30 },
    { x: "OP55[C]", y: 31, z: "Automatico", count: 22 },
    { x: "OP60[C]", y: 58, z: "Manual", count: 48 },
    { x: "OP70[C]", y: 35, z: "Automatico", count: 20 },
    { x: "OP75[C]", y: 27, z: "Automatico", count: 2 },
    { x: "OP80[C]", y: 45, z: "Semi-Automatico", count: 30 },
    { x: "OP20[B]", y: 41, z: "Semi-Automatico", count: 6 },
    { x: "OP30[B]", y: 36, z: "Automatico", count: 20 },
    { x: "OP40[B]", y: 70, z: "Manual", count: 40 },
    { x: "OP50[B]", y: 65, z: "Manual", count: 58 },
    { x: "OP55[B]", y: 31, z: "Automatico", count: 14 },
    { x: "OP60[B]", y: 59, z: "Manual", count: 26 },
    { x: "OP70[B]", y: 29, z: "Automatico", count: 4 },
    { x: "OP75[B]", y: 46, z: "Semi-Automatico", count: 8 },
    { x: "OP80[B]", y: 61, z: "Manual", count: 40 },
    { x: "OP20[A]", y: 41, z: "Semi-Automatico", count: 20 },
    { x: "OP30[A]", y: 25, z: "Automatico", count: 12 },
    { x: "OP40[A]", y: 61, z: "Manual", count: 30 },
    { x: "OP50[A]", y: 58, z: "Manual", count: 46 },
    { x: "OP55[A]", y: 45, z: "Semi-Automatico", count: 14 },
    { x: "OP60[A]", y: 39, z: "Semi-Automatico", count: 6 },
    { x: "OP70[A]", y: 28, z: "Automatico", count: 22 },
    { x: "OP75[A]", y: 52, z: "Manual", count: 50 },
    { x: "OP80[A]", y: 29, z: "Automatico", count: 0 },
  ];

  bot = new TelegramBot("1330320176:AAE_YOn26fn4H5GQr5FnE4zD-DhjDNj5bNQ", {
    polling: true,
  });

  chatId: string = "-466831592";

  constructor() {}

  ngOnInit(): void {
    // Telegram.setToken("1330320176:AAE_YOn26fn4H5GQr5FnE4zD-DhjDNj5bNQ");
    // Telegram.setRecipient("-466831592");


    this.bot.onText(/\/comandos/, (msg) => {
      const chatId = msg.chat.id;
      const who = msg.from.first_name;

      const date = new Date().toLocaleString().substr(0,10);

      const resp = `Olá ${who}, hoje (${date}), estão disponíveis os seguintes comandos: \n<b>- /corrente \n- /op + nome da operação desejada (OPNN[X])</b>`;
      this.bot.sendMessage(chatId, resp,  {parse_mode : "HTML"});
    });

    this.bot.onText(/\/echo (.+)/, (msg, match) => {
      const chatId = msg.chat.id;
      const resp = match[1];
      this.bot.sendMessage(chatId, resp, {parse_mode : "HTML"});
    });

    this.bot.onText(/\/corrente/, (msg, match) => {
      const chatId = msg.chat.id;
      let current = (Math.random() * 10).toFixed(2);

      const resp = `A Corrente atual é de: <b><u>${current} A</u></b>`;

      this.bot.sendMessage(chatId, resp, {parse_mode : "HTML"});
    });

    this.bot.onText(/\/op (.+)/, (msg, match) => {
      const chatId = msg.chat.id;
      const who = msg.from.first_name;

      let op: any;
      let value: any;
      let resp: any;

      for (let i = 0; i < this.mockedDataOne.length; i++) {
        if (this.mockedDataOne[i].x === match[1].toString().trim()) {
          op = this.mockedDataOne[i].z;
          value = this.mockedDataOne[i].y;
          resp = `${who}, a operação <b><u>${match[1]}</u></b> está em modo <b><u>${op}</u></b>. \nO tempo de ciclo atual é de <b><u>${value}</u></b> segundos.`;
          break;
        } else {
          resp = `${who}, esta operação é inexistente.`;
        }
      }
      this.bot.sendMessage(chatId, resp, {parse_mode : "HTML"});
    });
  }

  send() {
    let message = this.inputMessage.nativeElement.value as string;
    if (message !== "") {
      setTimeout(() => (this.answer = message), 0);
      this.bot.sendMessage(this.chatId, message);
      // Telegram.setMessage(message);
      // Telegram.send();
    }
  }
}
