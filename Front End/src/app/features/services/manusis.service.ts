import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MAINTENANCE_ORDER } from "src/app/shared/model/om.model";

const API = "https://comau.manusis4.com/api/v1/maint_orders";

@Injectable({
  providedIn: "root",
})
export class ManusisService {
  manusisapiHeaders = {
    headers: new HttpHeaders().set(
      "authorization",
      `Token token=d0b78b77dc444b32bf49c47d8d9b966c`
    ),
  };
  constructor(private http: HttpClient) {}

  postOm(om: MAINTENANCE_ORDER) {
    return this.http.post(`${API}`, om, this.manusisapiHeaders);
  }
}
