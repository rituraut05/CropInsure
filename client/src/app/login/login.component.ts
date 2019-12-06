import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
// import { ContractService } from '../ContractService/contract.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  position: ""
  options: "Farmer";
  loginForm: FormGroup;
  fb: FormBuilder;
  constructor(private router: Router, private formBuilder: FormBuilder) { }
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
    if (!this.loginForm.errors) {
      if (this.role === "insurer") {
        this.router.navigate(['/in'], { skipLocationChange: true });
      } else {
        this.router.navigate(['/index1'], { skipLocationChange: true });
      }
    }
  }

}
