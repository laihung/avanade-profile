import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'avanade-button',
  templateUrl: './avanade-button.component.html',
  styleUrls: ['./avanade-button.component.scss']
})
export class AvanadeButtonComponent implements OnInit {
  @Input() id: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
