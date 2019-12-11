import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private translate: TranslateService) { }
  option = "lazy";
  walletBalance = 1000;
  premium = 10;
  showWalletBalance = false;
  showWalletBalanceOn() {
    this.showWalletBalance = !this.showWalletBalance
  }
  payPremium(index: number) {
    this.walletBalance = this.walletBalance - this.walletBalance;
    this.walletBalance = 990;
    this.contracts[index].due = false
  }
  next_page() {
    history.pushState({ data: { key: 'valuee' } }, '', '');
    this.router.navigate(['/InsuranceForm'], { state: { data: { key: 'valuee' } } });
  }
  basic = false
  modal() {
    this.basic = true
  }
  changeLanguage(lang: string) {
    console.log("language is ", lang)
    this.translate.setDefaultLang(lang);
  }
  contracts = [
    {
      farmer_name: 'Ganpatrao Patil',
      type: 'Soyabean Insurance',
      region: 'Jalgaon, Maharashtra',
      issue: '11/5/2017',
      maturity: '11/4/2011',
      premium: '500 Rs',
      recurrence: 'Monthly',
      due: false,
      claim: true,
      damage: 20,
      index: 0
    },
    {
      farmer_name: 'Ganpatrao Patil',
      type: 'Wheat Insurance',
      region: 'Jalgaon, Maharashtra',
      issue: '10/7/2018',
      maturity: '11/11/2010',
      premium: '800 Rs',
      recurrence: 'Monthly',
      due: true,
      claim: false,
      damage: 40,
      index: 1
    }

  ];

  ngOnInit() {
  }

}
