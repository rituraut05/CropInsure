import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router,
    private translate: TranslateService) { }
  option = "lazy";

  next_page() {
    history.pushState({ data: { key: 'valuee' } }, '', '');
    this.router.navigate(['/InsuranceForm'], { state: { data: { key: 'valuee' } } });
  }

  ngOnInit() {
  }
  changeLanguage(lang: string) {
    console.log("language is ", lang)
    this.translate.setDefaultLang(lang);



  }
}
