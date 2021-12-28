import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styles: [
  ]
})
export class Page1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title='屬性綁定';
  picURL='https://imgur.dcard.tw/96IGGPfh.jpg';
  isDisable=true;
}
