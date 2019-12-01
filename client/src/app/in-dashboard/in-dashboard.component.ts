import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-dashboard',
  templateUrl: './in-dashboard.component.html',
  styleUrls: ['./in-dashboard.component.css']
})
export class InDashboardComponent implements OnInit {

  constructor() { }
  check_risk = false;
  loading = false;
  toggle_check_risk() {
    // this.check_risk = true;
    this.loading = true;
    setTimeout (() => {
      this.loading = false;
      this.check_risk = true;
   }, 3000);
  }
  // tslint:disable-next-line: member-ordering
  contracts = [{
    farmer_name: 'Ganpatrao Patil',
    type: 'Flood Insurance',
    region: 'Satara, Maharashtra',
    issue: '2/12/2019',
    maturity: '30/11/2021',
    premium: '1000 Rs',
    recurrence: 'Monthly',
    due: true,
    damage: 90
  },
  {
    farmer_name: 'Shivram Bhau Patil',
    type: 'Flood Insurance',
    region: 'Jalgaon, Maharashtra',
    issue: '28/11/2019',
    maturity: '29/11/2024',
    premium: '1000 Rs',
    recurrence: 'Monthly',
    due: false,
    damage: 20
  },
  {
    farmer_name: 'Shivram Bhau Patil',
    type: 'Flood Insurance',
    region: 'Jalgaon, Maharashtra',
    issue: '28/11/2019',
    maturity: '29/11/2024',
    premium: '1000 Rs',
    recurrence: 'Monthly',
    due: true,
    damage: 12
  },
  {
    farmer_name: 'Shivram Bhau Patil',
    type: 'Flood Insurance',
    region: 'Jalgaon, Maharashtra',
    issue: '28/11/2019',
    maturity: '29/11/2024',
    premium: '1000 Rs',
    recurrence: 'Monthly',
    due: false,
    damage: 82
  },
  {
    farmer_name: 'Shivram Bhau Patil',
    type: 'Flood Insurance',
    region: 'Jalgaon, Maharashtra',
    issue: '28/11/2019',
    maturity: '29/11/2024',
    premium: '1000 Rs',
    recurrence: 'Monthly',
    due: true,
    damage: 85
  },
  {
    farmer_name: 'Shivram Bhau Patil',
    type: 'Flood Insurance',
    region: 'Jalgaon, Maharashtra',
    issue: '28/11/2019',
    maturity: '29/11/2024',
    premium: '1000 Rs',
    recurrence: 'Monthly',
    due: true,
    damage: 23
  },
  {
    farmer_name: 'Shivram Bhau Patil',
    type: 'Flood Insurance',
    region: 'Jalgaon, Maharashtra',
    issue: '28/11/2019',
    maturity: '29/11/2024',
    premium: '1000 Rs',
    recurrence: 'Monthly',
    due: false,
    damage: 50
  }

];
  items = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  option = 'lazy';
  downloadinInvoice = true;
  ngOnInit() {
  }

}
