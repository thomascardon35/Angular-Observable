import { Component, OnInit } from '@angular/core';
import { SwapiService } from './swapi.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  datas;
  isLoading = true;

  constructor(private swapiService: SwapiService) {}

  ngOnInit() {
    this.swapiService.getData().subscribe((data: any) => {
      this.datas = data.results;
      this.isLoading = false;
    });
  }
}
