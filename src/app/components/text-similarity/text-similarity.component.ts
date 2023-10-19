import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DandelionApiService } from 'src/app/services/dandelion-api.service';
@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
})
export class TextSimilarityComponent {

  dandelionService = inject(DandelionApiService)
  toaster = inject(ToastrService)

  similarity: number = 0;
  hasResults: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    // Send data to service
    this.dandelionService.getTextSimilarityResults(form.value.text1, form.value.text2).subscribe(
      (response) => {
        this.similarity = +(response.similarity * 100).toFixed(2);
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
