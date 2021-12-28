import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[InTheBox]'
})
export class InTheBoxDirective {

  @HostListener("mouseenter") onMouseEnter(){
    this.putInTheBox("solid 2px red");
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.putInTheBox("none");
  }

  constructor(private el: ElementRef) {
    //this.putInTheBox("solid 2px red");
  }

  private putInTheBox(BorderStyle:string){
    this.el.nativeElement.style.border = BorderStyle;
  }

  
}
