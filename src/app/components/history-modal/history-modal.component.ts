import { Component, inject, SimpleChanges } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';
import { History } from 'src/app/types/dandelion-types';


@Component({
  selector: 'app-history-modal',
  templateUrl: './history-modal.component.html',
})
export class HistoryModalComponent {

  historyService = inject(HistoryService);

  historyArray: History[] = [];

  constructor() { }

  ngOnInit(): void {
    this.historyArray = this.historyService.getHistory();
  }

  ngDoCheck(): void {
    this.historyArray = this.historyService.getHistory();
  }


}
