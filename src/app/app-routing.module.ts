import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeInputComponent } from './home-input/home-input.component';
import { EntityExtractionComponent } from './entity-extraction/entity-extraction.component';
import { TextSimilarityComponent } from './text-similarity/text-similarity.component';
import { LanguageDetectionComponent } from './language-detection/language-detection.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';

const routes: Routes = [
  { path: '', component: HomeInputComponent },
  { path: 'entity-extraction', component: EntityExtractionComponent },
  { path: 'text-similarity', component: TextSimilarityComponent },
  { path: 'language-detection', component: LanguageDetectionComponent },
  { path: 'sentiment-analysis', component: SentimentAnalysisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
