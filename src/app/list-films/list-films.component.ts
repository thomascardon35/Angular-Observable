import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.css'],
})
export class ListFilmsComponent implements OnInit {
  @Input() allDatas;

  constructor() {}

  ngOnInit() {}
}
