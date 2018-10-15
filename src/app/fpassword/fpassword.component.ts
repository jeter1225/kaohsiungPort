import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fpassword',
  templateUrl: './fpassword.component.html',
  styleUrls: ['./fpassword.component.css']
})
export class FpasswordComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  	private location: Location
  ) { }

  ngOnInit() {
  }
  goBack() {
  	this.location.back();
  }
}
