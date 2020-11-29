import { Component, OnInit } from '@angular/core';
import { BearDataService } from 'src/app/service/bearData.service';
import { Bear } from '../bear.model';

@Component({
  selector: 'app-bear-list',
  templateUrl: './bear-list.component.html',
  styleUrls: ['./bear-list.component.css']
})
export class BearListComponent implements OnInit {

  constructor(private bearlistservice : BearDataService) { }
  bear : Bear[];
  ngOnInit() {
    this.bearlistservice.bearChanged.subscribe(
      (bear : Bear[]) =>{
        this.bear = bear;
      }
    );
    this.bear = this.bearlistservice.getBears();
  }

}
