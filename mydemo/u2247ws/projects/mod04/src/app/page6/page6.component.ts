import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-page6',
  templateUrl: './page6.component.html',
  styles: [
  ]
})
export class Page6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() searchText: string = "";
  @Output() searchTextChange = new EventEmitter<string>();

  onSearch(search:string){
    this.searchText = search;
    console.log(this.searchText);
    this.searchTextChange.emit(this.searchText);
  }
}
