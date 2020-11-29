import { Component, OnInit ,Input} from '@angular/core';
import { Bear } from '../../bear.model';

@Component({
  selector: 'app-bear-items',
  templateUrl: './bear-items.component.html',
  styleUrls: ['./bear-items.component.css']
})
export class BearItemsComponent implements OnInit {
  @Input() bears : Bear;
  @Input() index : number;
  constructor() { }

  ngOnInit() {
  }

}
