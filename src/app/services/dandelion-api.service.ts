import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { EntityExtractionResponse, LanguageDetectionResponse, TextSimilarityResponse } from '../types/dandelion-types';
import { HistoryService } from './history.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class DandelionApiService {
  httpClient = inject(HttpClient)
  historyService = inject(HistoryService)
  cookieService = inject(CookieService) 

  token = this.cookieService.get('token');

  private readonly nexUrl = environment.nexApi;
  private readonly simApi = environment.simApi;
  private readonly liApi = environment.liApi;
  private readonly sentApi = environment.sentApi;

  constructor() { }

  // ENTITY EXTRACTION
  getEntityExtractionResults(min_confidence: string, include: string[], text: string): Observable<EntityExtractionResponse>{
    //? Join include array into a string with comma as a separator
    const includeString = include.join(",");
   
    //? Build query string
    const queryString = `${this.nexUrl}&text=${text}&min_confidence=${min_confidence}${includeString !== '' ? `&include=${includeString}` : ''}&token=${this.token}`;
    
    // Get current timestamp in format YYYY-MM-DD HH:MM:SS
    const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');

    //! Push query to history
    this.historyService.pushToHistory(timestamp, "GET", queryString);
    
    return this.httpClient.get<EntityExtractionResponse>(queryString);
  }

  // TEXT SIMILARITY
  getTextSimilarityResults(text1: string, text2: string): Observable<TextSimilarityResponse>{
    const queryString = `${this.simApi}&text1=${text1}&text2=${text2}&token=${this.token}`;

    // Get current timestamp in format YYYY-MM-DD HH:MM:SS
    const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');

    //! Push query to history
    this.historyService.pushToHistory(timestamp, "GET", queryString);

    return this.httpClient.get<TextSimilarityResponse>(queryString);
  }

  // LANGUAGE DETECTION
  getLanguageDetectionResults(text: string, clean: boolean): Observable<LanguageDetectionResponse>{
    const queryString = `${this.liApi}?text=${text}&clean=${clean}&token=${this.token}`;

    // Get current timestamp in format YYYY-MM-DD HH:MM:SS
    const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');

    //! Push query to history
    this.historyService.pushToHistory(timestamp, "GET", queryString);

    return this.httpClient.get<LanguageDetectionResponse>(queryString);
  }
}

