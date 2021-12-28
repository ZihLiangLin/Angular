import { Component, ElementRef, ViewChild } from '@angular/core';
import { CheckStockComponent } from './check-stock/check-stock.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
// @ViewChild("title1") h1: ElementRef | any;
// @ViewChild(CheckStockComponent) checkStock: CheckStockComponent;

  title = '購物車';
  Qty: number = 12;
  Stock: number = 10;

}
