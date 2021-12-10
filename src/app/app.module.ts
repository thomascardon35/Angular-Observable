import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { SwapiService } from './swapi.service';
import { ListFilmsComponent } from './list-films/list-films.component';
import { FilmDetailsComponent } from './film-details/film-details.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ListFilmsComponent,
    FilmDetailsComponent,
  ],
  bootstrap: [AppComponent],
  providers: [SwapiService],
})
export class AppModule {}
