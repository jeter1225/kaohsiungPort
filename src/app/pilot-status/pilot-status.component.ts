import { Component, OnInit } from '@angular/core';
import { StatusService } from '../service-summary/status.service';

@Component({
  selector: 'app-pilot-status',
  templateUrl: './pilot-status.component.html',
  styleUrls: ['./pilot-status.component.css']
})
export class PilotStatusComponent implements OnInit {

  constructor( private statusService: StatusService ) { }

  ngOnInit() {
    
  }

}
