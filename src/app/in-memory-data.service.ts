import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  
  createDb() {
  	const pilot_status_list = [
  		{ pilot_id: 11, name: 'A', ship_id: 'Ship A', status: 'waiting', night_shift: '1'},
			{ pilot_id: 12, name: 'B', ship_id: 'Ship B', status: 'working', night_shift: '0'},
			{ pilot_id: 13, name: 'C', ship_id: 'Ship C', status: 'waiting', night_shift: '1'},
			{ pilot_id: 14, name: 'D', ship_id: 'Ship D', status: 'working', night_shift: '0'},
			{ pilot_id: 15, name: 'E', ship_id: 'Ship E', status: 'waiting', night_shift: '1'},
			{ pilot_id: 16, name: 'F', ship_id: 'Ship F', status: 'working', night_shift: '0'},
			{ pilot_id: 17, name: 'G', ship_id: 'Ship G', status: 'waiting', night_shift: '1'},
			{ pilot_id: 18, name: 'H', ship_id: 'Ship H', status: 'working', night_shift: '0'},
			{ pilot_id: 19, name: 'I', ship_id: 'Ship I', status: 'waiting', night_shift: '1'},
			{ pilot_id: 20, name: 'J', ship_id: 'Ship J', status: 'working', night_shift: '0'}
  	];
  	return { pilot_status_list };
  }

  constructor() { }
}
