import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EthcontractService } from '../ethcontract.service';
import { HttpClient } from '@angular/common/http';
//import {Textract} from 'aws-sdk';
@Component({
  selector: 'app-insurance-form',
  templateUrl: './insurance-form.component.html',
  styleUrls: ['./insurance-form.component.css']
})
export class InsuranceFormComponent implements OnInit {
  form: FormGroup;
  submitbuttonStatus: any

  constructor(private router: Router, private formBuilder: FormBuilder, private ethcontractService: EthcontractService,
    private http:HttpClient) {
    this.form = this.formBuilder.group({
      basic: this.formBuilder.group({
        name: ['', Validators.required],
        adhaar: ['', Validators.required],
        mobile: ['', Validators.required],
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
      premium: this.formBuilder.group({
        checkpremium: ""
      }),
    });
  }
  basic = false
  modal() {
    console.log("in modal")
    this.basic = true
  }
  premium=100
  modalOk(){
    // this.formBuilder.group({premium:this.formBuilder.group({
    //   checkpremium:"100"
    // })})

    this.basic =false;
    this.acceptedPremium = true
  }
  acceptedPremium = false;
  submit() {
    console.log('reactive form submit', this.form.value);
    let that = this;
    this.ethcontractService.createInsurance();
  }

  progressisHidden = true;
  infoisHidden = true;
  firstName = '';
  midleName = '';
  lastName = '';
  setValues() {
    setTimeout(
      () => {
        this.infoisHidden = false
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
          premium: this.formBuilder.group({
            checkpremium: ""
          }),
        });
      },
      6000
    );
  }
  filename:"";
  onFileSelected(event) {
    if(event.target.files.length > 0)
     {
       console.log("filename:",event.target.files[0].name);
       this.filename =event.target.files[0].name;
     }
   }
  uplaoddata() {

    this.progressisHidden = false;
    //this.setValues();
    console.log("sending request")

    this.http.get('http://localhost:3000/api/textract').subscribe((data:any)=>{

      console.log("got the data",data);
    },error=>{
      console.log("error:",error);

    });
    // tslint:disable-next-line: no-unused-expression

  }
  next_page() {
    this.router.navigate(['/index']);
  }
  ngOnInit() {
  }

}
