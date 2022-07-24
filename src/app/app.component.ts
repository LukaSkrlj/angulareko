import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  readonly VAPID_PUBLIC_KEY =
    "BFC5ssnreDv557yUt_cBdZdSGZ2ONRNlp82KHkT8FXMXyOO3wlK5d-A5WzaNh2KXKP5_6CyZDkGnJhkxhC1sFBg";
  constructor() {}
  ngOnInit() {}
  subscribeToNotifications() {}
}
