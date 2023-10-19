import { Injectable } from '@angular/core';
import { History } from '../types/dandelion-types';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  history: History[] = [];

  constructor() { }

  pushToHistory(timestamp: string, type: string, query: string){
    this.history.push({timestamp, type, query});
  }

  getHistory(){
    // return copy of history array
    return this.history.slice();
  }

}
