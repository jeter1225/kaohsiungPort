import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor( 
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  navLinks = [{label: 'Information', path: 'information'},{label: 'Status', path: 'status'},{label: 'Order', path: 'order'}]

}
