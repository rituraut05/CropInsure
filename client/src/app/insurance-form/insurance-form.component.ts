import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-insurance-form',
  templateUrl: './insurance-form.component.html',
  styleUrls: ['./insurance-form.component.css']
})
export class InsuranceFormComponent implements OnInit {

  constructor(private router: Router) { }
  
  progressisHidden = true;
  firstName = '';
  midleName = '';
  lastName = '';
  uplaoddata() {
    this.progressisHidden = false;
  }
  next_page() {
    this.router.navigate(['/index']);
  }
  ngOnInit() {
  }

}
