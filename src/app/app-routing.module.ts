import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeInputComponent } from './components/home-input/home-input.component';
import { EntityExtractionComponent } from './components/entity-extraction/entity-extraction.component';
import { TextSimilarityComponent } from './components/text-similarity/text-similarity.component';
import { LanguageDetectionComponent } from './components/language-detection/language-detection.component';
import { SentimentAnalysisComponent } from './components/sentiment-analysis/sentiment-analysis.component';
import { tokenGuard } from './token.guard';

const routes: Routes = [
  { 
    path: '', 
    component: HomeInputComponent,
  },
  { 
    path: 'entity-extraction', 
    component: EntityExtractionComponent,
    canActivate: [tokenGuard], 
  },
  { 
    path: 'text-similarity', 
    component: TextSimilarityComponent, 
    canActivate: [tokenGuard],
  },
  { 
    path: 'language-detection', 
    component: LanguageDetectionComponent,
    canActivate: [tokenGuard],
  },
  { 
    path: 'sentiment-analysis', 
    component: SentimentAnalysisComponent,
    canActivate: [tokenGuard], 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
