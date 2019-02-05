import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Currency} from '../interfaces/currency';

@Injectable({
    providedIn: 'root'
})

export class CurrencyService {
    private rates = {
        RUB: 1,
        EUR: 1,
        USD: 1
    };
    private current: string;
    public updateSubject = new Subject<any>();

    constructor(
        private http: HttpClient
    ) {
    }

    public getCurrencyRate(): any {
        const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
        return this.http.get<any>(url).subscribe(
            response => {
                if ('Valute' in response) {
                    const ratesInfo = response.Valute;
                    this.rates.EUR = ratesInfo.EUR.Value;
                    this.rates.USD = ratesInfo.USD.Value;
                    return this.rates;
                }
            },
            error => {
                throw new Error(error);
            }
        );
    }

    public setCurrentCurrency(currency: string): void {
        if (currency) {
            this.current = currency;
        }
        // после установки валюты всем подписчикам надо обновить данные
        this.updateSubject.next(true);
    }

    public getCurrentCurrency(): Currency {
        return {
            name: this.current,
            rate: this.rates[this.current]
        };
    }

}
