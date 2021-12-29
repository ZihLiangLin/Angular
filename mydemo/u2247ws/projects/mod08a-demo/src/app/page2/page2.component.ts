import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styles: [
  ], 
  providers:[
    Service1Service
  ]
})
export class Page2Component implements OnInit {

  constructor(public s1: Service1Service) { 
    s1.a="page2";
  }

  ngOnInit(): void {
  }
  Display(){
    console.log(this.s1.a);
  }
}
