
//? History interface
export interface History{
    timestamp: string,
    type: string,
    query: string,
}

//? Annotation interface
export interface Annotation {
    title: string,
    confidence: number,
    uri: string,
    label: string,
    categories: string[],
    abstract: string,
    image: {
        full: string,
        thumbnail: string,
    }
}

//? EntityExtractionResponse interface
export interface EntityExtractionResponse {
    timestamp: string,
    annotations: Annotation[],
}

//? TextSimilarityResponse interface
export interface TextSimilarityResponse {
    similarity: number,
    langConfidence: number,
    timestamp: string,
}

//? DetectedLang interface
export interface DetectedLang {
    lang: string,
    confidence: number,
}

//? LanguageDetectionResponse interface
export interface LanguageDetectionResponse {
    detectedLangs: DetectedLang[],
}

//? SentimentResponse interface
export interface SentimentResponse {
    timestamp: string,
    lang: string,
    langConfidence: number,
    sentiment: {
        score: number,
        type: string,
    },
}