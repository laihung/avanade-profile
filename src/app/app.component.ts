import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Services } from './services/services';
import { Card } from './components/avanade-card/avanade-card.model';

declare var $: any; //declare for jQuery usage

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  pageNumber: number;
  totalPage: number;
  cards: Card[];
  isLoading: boolean = false;

  constructor(
    private services: Services
  ) {}

  ngOnInit() {
    //Default to be page 1 during onload
    this.triggerProfileService(1);
  }

  getPeopleViaInput() {
    let inputVal = $('#page-number-input').val();
    let parsedValue = parseInt(inputVal);
    let incorrectFormatMsg = 'Please ensure that the input value is in correct format.'

    //Check if input value is numeric
    if(!Number.isInteger(parsedValue)) {
      alert(incorrectFormatMsg);
      return;
    }

    //Check if input value is decimal
    if(parsedValue != inputVal) {
      alert(incorrectFormatMsg);
      return;
    }

    //Check if input value is negative
    if(parsedValue < 0) {
      alert(incorrectFormatMsg);
      return;
    }

    //Check if input value is negative
    if(parsedValue > this.totalPage) {
      alert('Please ensure that the input value is between the range of 1 to ' + this.totalPage);
      return;
    }

    //Do nothing if input value is the same as current displayed page number
    if(parsedValue == this.pageNumber) {
      return;
    }

    this.triggerProfileService(parsedValue);
    $('#page-number-input').val(''); //reset input
  }

  getPeopleViaButton(pageNumber: number, isPrevious = true) {
    if(isPrevious) {
      //Looking for previous profiles
      pageNumber = pageNumber - 1;
    }
    else{
      //Looking for next profiles
      pageNumber = pageNumber + 1;
    }

    this.triggerProfileService(pageNumber);
  }

  triggerProfileService(pageNumber: number) {
    this.isLoading = true;
    this.services.getProfiles(pageNumber).subscribe(res => {
      this.pageNumber = res.page;
      this.cards = res.data;
      this.totalPage = res.total_pages;
      this.isLoading = false;
    });
    
  }
}
