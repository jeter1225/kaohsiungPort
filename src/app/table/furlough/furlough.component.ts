import { Component, OnInit } from '@angular/core';
import { StatusService } from '../../service-summary/status.service';

@Component({
  selector: 'app-furlough',
  templateUrl: './furlough.component.html',
  styleUrls: ['./furlough.component.css']
})
export class FurloughComponent implements OnInit {

  constructor( private statusService: StatusService ) { }

  ngOnInit() {
    
  }

}
