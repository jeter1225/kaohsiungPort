import { Component, OnInit } from '@angular/core';
import { ConfigLogService } from '../config-log.service';
import { Hero } from '../hero';
import { PilotStatusTableItem } from '../pilot-status-table/pilot-status-table-datasource';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  config: PilotStatusTableItem[];

  constructor(
  	private configLogService: ConfigLogService
  ) { }

  ngOnInit() {
    this.show();
  }

  show() {
    this.configLogService.getPilotStatusList()
    .subscribe(pilot_status_list => this.config = pilot_status_list);
  }


}
