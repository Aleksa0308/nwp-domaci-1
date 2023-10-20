import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DandelionApiService } from 'src/app/services/dandelion-api.service';
import { SentimentResponse } from 'src/app/types/dandelion-types';

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
})
export class SentimentAnalysisComponent {


  dandelionService = inject(DandelionApiService)
  toaster = inject(ToastrService)

  sentimentResult: SentimentResponse = {} as SentimentResponse;
  hasResults: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const text = form.value.text;
    let lang = form.value.lang;

    // split lang by '-' and take the first part then trim it
    lang = lang.split('-')[0].trim();
    
    // Send data to service
    this.dandelionService.getSentimentAnalysisResults(text, lang).subscribe(
      (response) => {
        this.sentimentResult = response;
        this.hasResults = true;
        this.toaster.success("Data fetched successfully!");
      },
      (error) => {
        this.hasResults = false;
        this.toaster.error("Error while fetching data from Dandelion API!");
      }
    )
  }
}
