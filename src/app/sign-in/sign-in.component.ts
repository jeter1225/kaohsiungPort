import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthenService } from '../service-summary/authen.service';
import { StatusService } from '../service-summary/status.service';
import { Injectable } from '@angular/core';
import { Global } from '../global';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  accountValue: string = "";
  passwordValue: string = "";
  getToken: any;
  loginError: boolean = false;
  identity: any;
  
  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private http: HttpClient,
    private authenService: AuthenService,
    private statusService: StatusService,
    private global: Global
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
    .subscribe(
      token => {
        this.getToken = token,
        this.global.setToken(this.getToken.access) 
    });
    setTimeout((_ => this.checkId()), 1250);
  }

  checkId() {
    this.authenService.checkIdentity()
    .subscribe(
      identity => this.identity = identity,
    );
    setTimeout((_ => this.login()), 1250);
  }

  login() {
    if(this.identity.auth == "frontDesk") {
      this.loginError = false;
      this.router.navigate(['homepage/information']);
    }
    else {
      console.log("You are not front desk!");
      this.loginError = true;
    }
  }
  

}
