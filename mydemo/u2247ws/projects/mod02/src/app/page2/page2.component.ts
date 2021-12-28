import { Component, OnInit } from '@angular/core';
import { Picture } from '../picture';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styles: [
  ]
})
export class Page2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public pictures = [new Picture(
    1,
    "https://imgur.dcard.tw/96IGGPfh.jpg",
    "基德",
    "me"
  ), new Picture(
    2,
    "https://imgur.dcard.tw/96IGGPfh.jpg",
    "基德",
    "me"
  ), new Picture(
    3,
    "https://imgur.dcard.tw/96IGGPfh.jpg",
    "基德",
    "me"
  )];
}
