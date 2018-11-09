import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigLogService } from '../service-summary/config-log.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  accountValue: string = "";
  passwordValue: string = "";
  confirmLog: boolean = true;
  
  constructor(
    private configLogService: ConfigLogService,
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  checkLog() {
    if(this.accountValue.length != 0 || this.passwordValue.length != 0){
      this.router.navigate(['homepage/information']);
    }
    else{
      console.error('error occur!');
    }
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

}
