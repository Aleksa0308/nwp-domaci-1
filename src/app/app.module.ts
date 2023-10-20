import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeInputComponent } from './components/home-input/home-input.component';
import { HistoryModalComponent } from './components/history-modal/history-modal.component';
import { EntityExtractionComponent } from './components/entity-extraction/entity-extraction.component';
import { TextSimilarityComponent } from './components/text-similarity/text-similarity.component';
import { LanguageDetectionComponent } from './components/language-detection/language-detection.component';
import { SentimentAnalysisComponent } from './components/sentiment-analysis/sentiment-analysis.component';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntityCardComponent } from './components/entity-extraction/entity-card/entity-card.component';
import { EntityModalComponent } from './components/entity-extraction/entity-modal/entity-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeInputComponent,
    HistoryModalComponent,
    EntityExtractionComponent,
    TextSimilarityComponent,
    LanguageDetectionComponent,
    SentimentAnalysisComponent,
    EntityCardComponent,
    EntityModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
