import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthenService } from '../service-summary/authen.service';
import { StatusService } from '../service-summary/status.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  accountValue: string = "";
  passwordValue: string = "";
  getToken: any = "";
  loginError: boolean = false;
  
  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private http: HttpClient,
    private authenService: AuthenService,
    private statusService: StatusService
  ) { }

  ngOnInit() {
    this.accountValue = "";
    this.passwordValue = "";
  }

  forgetPassword() {
    this.router.navigate(['fpassword']);
  }

  returnAccount(event: any) {
    this.accountValue = event.target.value;
  }

  returnPass(event: any) {
    this.passwordValue = event.target.value;
  }

  checkLog() {
    this.authenService.login(this.accountValue, this.passwordValue)
    .subscribe(token => {
               this.getToken = token
               console.log(this.getToken)
              });
    setTimeout((_ => this.login()), 1100);
  }

  login() {
    if(this.getToken != "") {
      this.loginError = false;
      this.router.navigate(['homepage/information']);
      this.statusService.sendToken(this.getToken);
    }
    else {
      console.log("Did not get token!");
      this.loginError = true;
    }
  }
  

}
