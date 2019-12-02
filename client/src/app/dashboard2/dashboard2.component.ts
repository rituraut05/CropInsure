import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit {

  constructor(private router: Router,private translate:TranslateService) { }
  option = "lazy";
  loading = true;
  next_page() {
    history.pushState({data: {key: 'valuee'}}, '', '');
    this.router.navigate(['/InsuranceForm'], {state: {data: {key: 'valuee'}}});
  }
  basic = false
  modal(){
    this.basic = true
  }
  changeLanguage(lang: string) {
    console.log("language is ", lang)
    this.translate.setDefaultLang(lang);
  }

  contracts = [
    {
      farmer_name: 'Ganpatrao Patil',
      type: 'Flood Insurance',
      region: 'Jalgaon, Maharashtra',
      issue: '2/12/2019',
      maturity: '30/11/2021',
      premium: '1000 Rs',
      recurrence: 'Monthly',
      due: true,
      claim: false,
      damage: 90
    },
  {
    farmer_name: 'Ganpatrao Patil',
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
    farmer_name: 'Ganpatrao Patil',
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
    setTimeout (() => {
      this.loading = false;
   }, 1000);
  }

}
