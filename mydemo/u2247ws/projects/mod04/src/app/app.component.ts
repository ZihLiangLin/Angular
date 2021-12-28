import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'mod04';
  mySearch: string = "";
  isTouch: boolean = true;
  isFound: boolean = false;
  resultStyles = {};
  onTextChange(search:string){
    this.isTouch = false;
    this.isFound = search.length > 3;
    this.resultStyles = {
      'border':this.isFound?'solid 3px blue':'solid 3px red',
      'color':this.isFound?'black':'red',
      'background-color':this.isFound?'yellow':'white'
    };
  }
}
