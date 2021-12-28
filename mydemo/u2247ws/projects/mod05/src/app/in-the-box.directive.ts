import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[InTheBox]'
})
export class InTheBoxDirective {

  constructor(private el: ElementRef) {
    this.putInTheBox("solid 2px red");
  }

  private putInTheBox(BorderStyle:string){
    this.el.nativeElement.style.border = BorderStyle;
  }

}
