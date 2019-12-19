import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-dashboard',
  templateUrl: './in-dashboard.component.html',
  styleUrls: ['./in-dashboard.component.css']
})
export class InDashboardComponent implements OnInit {

  constructor() { }
  navCollapsed: any
  groupExpand: any
  updateNavCollapsed: any
  updateGroupExpand: any

  dailyCheck = false
  settle_loading = false;
  after_loading = false;
  autoSettle = false;
  showWalletBalance = false;
  walletBalance = 1000000;
  showWalletBalanceOn() {
    this.showWalletBalance = !this.showWalletBalance
  }
  settle(i) {
    //always settle the first card

    this.settle_loading = true;
    setTimeout(() => {
      this.settle_loading = false;
      this.contracts[i].settle = true;
      if (this.autoSettle) {
        setTimeout(() => {
          this.after_loading = true;

        }, 1000);

      } else {
        setTimeout(() => {
          this.after_loading = true;

        }, 3000);
      }

    }, 3000);
    this.walletBalance = 999700

  }
  cancel() {
    this.basic = false;
    this.after_loading = false;

  }
  OnDailyCheck() {
    this.dailyCheck = !this.dailyCheck
  }
  OnAutoSettle() {
    this.autoSettle = !this.autoSettle
    this.walletBalance = 998800;
  }
  basic = false
  modal() {
    this.basic = true
  }
  check_risk = false;
  loading = false;
  toggle_check_risk() {
    // this.check_risk = true;
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.check_risk = true;
    }, 3000);

  }
  // tslint:disable-next-line: member-ordering
  contracts = [{
    farmer_name: 'Ganpatrao Patil',
    type: 'Wheat Insurance',
    region: 'Satara, Maharashtra',
    issue: '2/12/2019',
    maturity: '30/11/2021',
    premium: '1000 Rs',
    recurrence: 'Monthly',
    due: true,
    damage: 90,
    settle: false
  },
  {
    farmer_name: 'Shivram Bhau Patil',
    type: 'Wheat Insurance',
    region: 'Jalgaon, Maharashtra',
    issue: '28/11/2019',
    maturity: '29/11/2024',
    premium: '1000 Rs',
    recurrence: 'Monthly',
    due: false,
    damage: 20,
    settle: false
  },
  {
    farmer_name: 'Shevteraj Kamble',
    type: 'Rice Insurance',
    region: 'Bhid, Maharashtra',
    issue: '5/10/2019',
    maturity: '29/11/2024',
    premium: '800 Rs',
    recurrence: 'Monthly',
    due: true,
    damage: 12,
    settle: false
  },
  {
    farmer_name: 'Hansraj Sonavne',
    type: 'Soyabean Insurance',
    region: 'Kolhapur, Maharashtra',
    issue: '5/11/2019',
    maturity: '5/11/2020',
    premium: '500 Rs',
    recurrence: 'Monthly',
    due: false,
    damage: 82,
    settle: false
  },
  {
    farmer_name: 'Shivkumar Bhau Nalawde',
    type: 'Wheat Insurance',
    region: 'Kanchangao, Maharashtra',
    issue: '28/11/2019',
    maturity: '29/11/2024',
    premium: '1000 Rs',
    recurrence: 'Monthly',
    due: true,
    damage: 85,
    settle: false
  },
  {
    farmer_name: 'Suraj Bharte',
    type: 'Soyabean Insurance',
    region: 'Pusegaon, Maharashtra',
    issue: '2/7/2019',
    maturity: '2/8/2010',
    premium: '500 Rs',
    recurrence: 'Monthly',
    due: true,
    damage: 23,
    settle: false
  },
  {
    farmer_name: 'Ganpatrao Patil',
    type: 'Rice Insurance',
    region: 'Satara, Maharashtra',
    issue: '10/7/2018',
    maturity: '11/11/2010',
    premium: '1000 Rs',
    recurrence: 'Monthly',
    due: true,
    damage: 21,
    settle: false
  },
  {
    farmer_name: 'Ganpatrao Patil',
    type: 'Soyabean Insurance',
    region: 'Satara, Maharashtra',
    issue: '11/5/2017',
    maturity: '11/4/2011',
    premium: '1000 Rs',
    recurrence: 'Monthly',
    due: true,
    damage: 10,
    settle: false
  },
  {
    farmer_name: 'Shivram Bhau Patil',
    type: 'Wheat Insurance',
    region: 'Jalgaon, Maharashtra',
    issue: '28/11/2019',
    maturity: '29/11/2024',
    premium: '1000 Rs',
    recurrence: 'Monthly',
    due: true,
    damage: 82,
    settle: false
  }

  ];
  items = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  option = 'lazy';
  downloadinInvoice = true;
  ngOnInit() {
  }

}
