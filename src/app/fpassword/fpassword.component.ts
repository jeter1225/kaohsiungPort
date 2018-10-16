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

  confir() {
    confirm("密碼已送至您的手機簡訊！")
  }
  
  goBack() {
  	this.location.back();
  }
}
