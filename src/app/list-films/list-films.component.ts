import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.css'],
})
export class ListFilmsComponent implements OnInit {
  @Input() allDatas;
  @Output() clickOnBtn = new EventEmitter();

  constructor() {}


  onClick(event : any){
    console.log(event);
    this.clickOnBtn.emit(event);

  }


  ngOnInit() {}
}
