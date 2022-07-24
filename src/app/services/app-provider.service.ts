import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class AppProviderService {
  public route = "http://127.0.0.1:8000/api/";
  constructor(private _http: HttpClient) {}

  public tickets(): Observable<any[]> {
    return this._http.get<any[]>(`${this.route}tickets`);
  }

  public updateTicket(id: number): Observable<any[]> {
    return this._http.put<any[]>(`${this.route}tickets/${id}`, {
      resolved: true,
    });
  }
}
