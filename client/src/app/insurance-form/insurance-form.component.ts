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
        name: ['Ganpatrao Patil', Validators.required],
        adhaar: ['5845 5000 8000', Validators.required],
        mobile: ['9458889772', Validators.required],
      }),
      farm: this.formBuilder.group({
        district: ['Satara', Validators.required],
        village: ['Koregaon', Validators.required],
        survey: ['10', Validators.required],
        area: ['0.5 acres', Validators.required]
      }),
      crop: this.formBuilder.group({
        cropname: ['Wheat', Validators.required],
        sownarea: ['0.42', Validators.required],
        sowdate: ['20/10/2019', Validators.required],
        season: ['Winter', Validators.required]
      }),
      bank: this.formBuilder.group({
        bankaccount: ['645XXXXXXX', Validators.required],
        ifsc: ['MAHB00301', Validators.required],
        branch: ['Koregaon', Validators.required],
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
