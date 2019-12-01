import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-insurance-form',
  templateUrl: './insurance-form.component.html',
  styleUrls: ['./insurance-form.component.css']
})
export class InsuranceFormComponent implements OnInit {
  form: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      basic: this.formBuilder.group({
        name: ['Luke', Validators.required],
        adhaar: ['Skywalker', Validators.required],
        mobile: ['Skywalker', Validators.required],
      }),
      farm: this.formBuilder.group({
        district: ['Luke', Validators.required],
        village: ['Skywalker', Validators.required],
        survey: ['Skywalker', Validators.required],
        area: ['Skywalker', Validators.required]
      }),
      crop: this.formBuilder.group({
        cropname: ['Luke', Validators.required],
        sownarea: ['Skywalker', Validators.required],
        sowdate: ['Skywalker', Validators.required],
        season: ['Skywalker', Validators.required]
      }),
      bank: this.formBuilder.group({
        bankaccount: ['Luke', Validators.required],
        ifsc: ['Skywalker', Validators.required],
        branch: ['Skywalker', Validators.required],
      }),
    });
   }
   submit() {
    console.log('reactive form submit', this.form.value);
  }
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
