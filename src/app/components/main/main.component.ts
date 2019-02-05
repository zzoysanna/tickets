import {Component, OnInit} from '@angular/core';
import {CurrencyService} from '../../services/currency.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    constructor(
        private currencyService: CurrencyService
    ) {
    }

    ngOnInit() {
        // при загрузке приложения загружаем курсы валют
        this.currencyService.getCurrencyRate();
        this.currencyService.setCurrentCurrency('RUB');
    }

}
