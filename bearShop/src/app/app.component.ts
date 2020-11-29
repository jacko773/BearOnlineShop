import { Component, OnInit } from '@angular/core';
import { BearDataService } from './service/bearData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bearShop';
  constructor(private bearDataService : BearDataService){};

  ngOnInit(){
    this.bearDataService.featchBears();
  }
}
