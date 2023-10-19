import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
})
export class LanguageDetectionComponent {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log("Submit button clicked!");
  }
}
