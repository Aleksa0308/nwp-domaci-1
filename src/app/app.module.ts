import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeInputComponent } from './home-input/home-input.component';
import { HistoryModalComponent } from './history-modal/history-modal.component';
import { EntityExtractionComponent } from './entity-extraction/entity-extraction.component';
import { TextSimilarityComponent } from './text-similarity/text-similarity.component';
import { LanguageDetectionComponent } from './language-detection/language-detection.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeInputComponent,
    HistoryModalComponent,
    EntityExtractionComponent,
    TextSimilarityComponent,
    LanguageDetectionComponent,
    SentimentAnalysisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
