import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SwapiService {
  constructor(private httpClient: HttpClient) {}

  getData() {
    return this.httpClient.get('https://swapi.dev/api/films/');
  }
}
