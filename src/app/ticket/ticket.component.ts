import { Component, OnInit } from "@angular/core";
import { map, take, tap } from "rxjs";
import { AppProviderService } from "src/app/services/app-provider.service";

@Component({
  selector: "app-ticket",
  templateUrl: "./ticket.component.html",
  styleUrls: ["./ticket.component.scss"],
})
export class TicketComponent implements OnInit {
  public tickets = [];
  positionMap = {
    street: "Partizanski put",
    num: "9a",
    city: "Rijeka",
  };
  mapsURL = `https://maps.google.com/maps?q=${this.positionMap.street}%20${this.positionMap.num}%20%${this.positionMap.city}&t=&z=20&ie=UTF8&iwloc=&output=embed`;
  constructor(private _appProvider: AppProviderService) {}

  ngOnInit(): void {
    this._appProvider
      .tickets()
      .pipe(
        tap((lo) => console.log(lo)),
        map((tickets) =>
          tickets
            .filter((ticket) => !ticket.resolved)
            .map((ticket) => ({
              ...ticket,
              map: `https://maps.google.com/maps?q=${ticket.street}%20${ticket.number}%20%${ticket.city}&t=&z=20&ie=UTF8&iwloc=&output=embed`,
            }))
        )
      )
      .subscribe((tickets) => {
        this.tickets = tickets;
      });
  }

  onClick(id) {
    this._appProvider
      .updateTicket(id)
      .pipe(take(1))
      .subscribe(() => {});

    this._appProvider
      .tickets()
      .pipe(
        tap((lo) => console.log(lo)),
        map((tickets) =>
          tickets
            .filter((ticket) => !ticket.resolved)
            .map((ticket) => ({
              ...ticket,
              map: `https://maps.google.com/maps?q=${ticket.street}%20${ticket.number}%20%${ticket.city}&t=&z=20&ie=UTF8&iwloc=&output=embed`,
            }))
        )
      )
      .subscribe((tickets) => {
        this.tickets = tickets;
      });
  }
}
