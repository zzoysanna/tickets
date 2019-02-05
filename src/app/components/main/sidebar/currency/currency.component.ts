import {Component, OnInit} from '@angular/core';
import {CurrencyService} from '../../../../services/currency.service';
import {Currency} from '../../../../interfaces/currency';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-currency',
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent {
    public currencyList = ['RUB', 'USD', 'EUR'];
    public currentCurrency: Currency;
    private currencyUpdate: Subscription;

    constructor(
        private currencyService: CurrencyService
    ) {
        this.currencyUpdate = this.currencyService.updateSubject.subscribe(
            () => {
                this.currentCurrency = this.currencyService.getCurrentCurrency();
            }
        );
    }

    public setCurrency(currency: string): void {
        if (currency) {
            this.currencyService.setCurrentCurrency(currency);
        }
    }
}
