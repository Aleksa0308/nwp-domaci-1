import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
})
export class SentimentAnalysisComponent {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log("Submit button clicked!");
    console.log(form.value);
  }
}
