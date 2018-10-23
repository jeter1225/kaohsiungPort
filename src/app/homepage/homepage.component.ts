import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

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

  showInformation(){
    this.router.navigate(['information'], { relativeTo : this.route })
  }

  showStatus(){
    this.router.navigate(['status'], { relativeTo : this.route })
  }

  showOrder(){
    this.router.navigate(['order'], { relativeTo : this.route })
  }
}
