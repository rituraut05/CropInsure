import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }
  option = "lazy";
  
  next_page() {
    history.pushState({data: {key: 'valuee'}}, '', '');
    this.router.navigate(['/InsuranceForm'], {state: {data: {key: 'valuee'}}});
  }
  basic = false
  modal(){
    this.basic = true
  }

  contracts = [{
    farmer_name: 'Shivram Bhau Patil',
    type: 'Flood Insurance',
    region: 'Jalgaon, Maharashtra',
    issue: '28/11/2019',
    maturity: '29/11/2024',
    premium: '1000 Rs',
    recurrence: 'Monthly',
    due: true,
    claim: false,
    damage: 90
  },
  {
    farmer_name: 'Shivram Bhau Patil',
    type: 'Wasp Disease Insurance',
    region: 'Jalgaon, Maharashtra',
    issue: '11/5/2017',
    maturity: '11/4/2011',
    premium: '500 Rs',
    recurrence: 'Monthly',
    due: false,
    claim: true,
    damage: 20
  },
  {
    farmer_name: 'Shivram Bhau Patil',
    type: 'Drought Insurance',
    region: 'Jalgaon, Maharashtra',
    issue: '10/7/2018',
    maturity: '11/11/2010',
    premium: '800 Rs',
    recurrence: 'Monthly',
    due: true,
    claim: false,
    damage: 12
  }
  
];

  ngOnInit() {
  }

}
