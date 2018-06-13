import { Component, OnInit, Input } from '@angular/core';
import { Data } from './avanade-card.model';

@Component({
  selector: 'avanade-card',
  templateUrl: './avanade-card.component.html',
  styleUrls: ['./avanade-card.component.scss']
})
export class AvanadeCardComponent implements OnInit {

  @Input() dataList: Data[];
  constructor() { }

  ngOnInit() {
    // console.log(this.dataList)
  }

}
