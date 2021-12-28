import { Component, ContentChildren, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-stock',
  templateUrl: './check-stock.component.html',
  styles: [
  ]
})
export class CheckStockComponent implements OnInit {

  @Input() Stock: number = 0;
  @Input() Qty = 0;
  Info = "";
  lower = false;

  constructor() { }

  ngOnInit(): void {
  }

  // ngOnChanges(){
  //   this.lower = (this.Stock < this.Qty);
  //   this.Info = this.lower ? `低於庫存，目前只有${this.Stock}`:'';
  //   console.log("ngOnChanges -");
  // }
  GetStock(){
    this.Stock = 20;
    console.log(this.Stock);
  }
  ngDoCheck(){
    this.lower = (this.Stock < this.Qty);
    this.Info = this.lower ? `低於庫存，目前只有${this.Stock}`:'';
    console.log(`ngDoCheck - ${this.Info}`);
  }

  @ContentChildren('span') spans: any;

  ngAfterContentInit(){
    console.log("ngAfterContentInit - ");
    this.spans.forEach((element:any) => {
      console.log("\t", element);
    });
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked - ");
    this.spans.forEach((element:any) => {
      console.log("\t", element);
    });
  }
}
