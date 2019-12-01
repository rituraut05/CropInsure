import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit {

  constructor(private router: Router) { }
  option = "lazy";
  next_page() {
    this.router.navigate(['/InsuranceForm']);
  }

  ngOnInit() {
  }

}
