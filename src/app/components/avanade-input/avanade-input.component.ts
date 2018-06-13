import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'avanade-input',
  templateUrl: './avanade-input.component.html',
  styleUrls: ['./avanade-input.component.scss']
})
export class AvanadeInputComponent implements OnInit {

  @Input() id: string;

  constructor() { }

  ngOnInit() {
  }

}
