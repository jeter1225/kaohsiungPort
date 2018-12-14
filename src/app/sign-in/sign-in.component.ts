import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigLogService } from '../service-summary/config-log.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthenService } from '../service-summary/authen.service';
import { logging } from 'selenium-webdriver';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  accountValue: string = "";
  passwordValue: string = "";
  getToken: string = "";
  loginError: boolean = false;
  
  constructor(
    private configLogService: ConfigLogService,
    private router: Router, 
    private route: ActivatedRoute,
    private http: HttpClient,
    private authenService: AuthenService
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
    setTimeout((_ => this.login()), 800);
  }

  login() {
    if(this.getToken != "") {
      this.loginError = false;
      this.router.navigate(['homepage/information']);
    }
    else {
      console.log("Did not get token!");
      this.loginError = true;
    }
  }
  

}
