import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  
  createDb() {
  	const heroes = [
  		{ id: 11, name: 'A'},
  		{ id: 12, name: 'B'}
  	];
  	return { heroes };
  }

  constructor() { }
}
