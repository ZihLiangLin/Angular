import { Component, OnInit } from '@angular/core';
import { Picture } from '../picture';

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

  Friends=["Jenny", "Vivid", "Kity", "Linda"];

  getval = () => 10;

  public picture = new Picture(
    1,
    "https://imgur.dcard.tw/96IGGPfh.jpg",
    "基德",
    "me"
  )
}
