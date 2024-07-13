export interface StringNumberPair {
    [key: string]: number;
}

export interface ExchangeRatesResponse {
    data: StringNumberPair;
}

export interface MappedCurrencyRateObject {
    currency: string;
    rate: number;
}

export interface Statistics {
    name: string;
    summary: number;
}
