import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {AppInfoService} from '../AppInfoService/app-info.service';
import {EthcontractService} from '../ethcontract.service';
// import { ContractService } from '../ContractService/contract.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  position: ""
  options:"Farmer";
  loginForm : FormGroup;
  fb:FormBuilder;

  submitted: any
  f: any
  loading: any
  onSubmit: any


  constructor(private router: Router, private formBuilder: FormBuilder,
    private appInfoService : AppInfoService,
    private ethcontractService:EthcontractService) { }
  role: String;
  ngOnInit() {
    this.fb = new FormBuilder();
    console.log(this.position)

    this.loginForm = this.fb.group(
      {
        role: [''],
        username: [''],
        password: [''],
        rememberme: ['']
      }
    )

  }
  changeRole(role) {
    this.role = role;
  }
  next_page() {
    console.log(this.role);
    // this.ethcontractService.disbursePayment("0xEAD2fF6e1ac2a86f7AaB4F8e8a4265b3acc5b44f",10);
    if (!this.loginForm.errors) {
        this.appInfoService.setCurrentInsurerEthAddress(this.ethcontractService.getContractAddress());
      if (this.role === "insurer") {

        this.router.navigate(['/in'], { skipLocationChange: true });
      } else if (this.role==="consumer"){
        this.router.navigate(['/public'],{skipLocationChange:true})
      } else {
        this.appInfoService.setCurrentFarmerEthAddress(this.ethcontractService.getFarmerAddress());

        this.router.navigate(['/index1'], { skipLocationChange: true });
      }
    }
  }

}
