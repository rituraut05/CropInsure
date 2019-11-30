import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-dashboard',
  templateUrl: './in-dashboard.component.html',
  styleUrls: ['./in-dashboard.component.css']
})
export class InDashboardComponent implements OnInit {

  constructor() { }
  items = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  option = "lazy";
  ngOnInit() {
  }

}
