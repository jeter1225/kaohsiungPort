import { Component, OnInit } from '@angular/core';
import { ConfigLogService } from '../config-log.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  config: Hero[];

  constructor(
  	private configLogService: ConfigLogService
  ) { }

  ngOnInit() {
  	this.showConfig();
  }

  showConfig() {
  	this.configLogService.getHeroes()
  	.subscribe(heroes => this.config = heroes);
  }

}
