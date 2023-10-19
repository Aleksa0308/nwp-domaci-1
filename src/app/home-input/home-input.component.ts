import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home-input',
  templateUrl: './home-input.component.html',
})
export class HomeInputComponent{

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log("Submit button clicked!");
    console.log(form.value);
    
  }
}
