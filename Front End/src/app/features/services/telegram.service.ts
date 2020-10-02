import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const API_TELEGRAM = "https://api.telegram.org";
const BOT_TOKEN = "1330320176:AAE_YOn26fn4H5GQr5FnE4zD-DhjDNj5bNQ";

@Injectable({
  providedIn: "root",
})
export class TelegramService {
  constructor(private http: HttpClient) {}

  sendMessage(message: string) {
    console.log('aqui foi');
    return this.http.post(
      `${API_TELEGRAM}/bot${BOT_TOKEN}/sendMessage?chat_id=-466831592&text=`,
      {
        content: message,
        type: "message",
        chatId: -466831592,
      }
    );
  }
}
