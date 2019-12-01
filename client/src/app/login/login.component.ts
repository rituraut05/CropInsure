import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  position: ""
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log(this.position)
  }
  next_page() {
    this.router.navigate(['/index1']);
  }

}
