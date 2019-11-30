import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  next_page() {
    history.pushState({data: {key: 'valuee'}}, '', '');
    this.router.navigate(['/InsuranceForm'], {state: {data: {key: 'valuee'}}});
  }

  ngOnInit() {
  }

}
