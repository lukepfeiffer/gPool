import { Component, OnInit } from '@angular/core';
import { Ride } from "../ride";
import { RIDES } from "../rides-list";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  rides = RIDES;

  constructor() { }

  ngOnInit() {
  }

}
