import {Component, OnInit} from '@angular/core';
import {GetDataService} from '../../../services/get-data.service';
import {CurrencyService} from '../../../services/currency.service';
import {Currency} from '../../../interfaces/currency';
import {Subscription} from 'rxjs';
import {FilterService} from '../../../services/filter.service';

@Component({
    selector: 'app-offers',
    templateUrl: './offers.component.html',
    styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
    public tickets = [];
    public filter = [];
    public filteredTickets = [];
    public currentCurrency: Currency;
    private currencyUpdate: Subscription;
    private filterUpdate: Subscription;

    constructor(
        private getDataService: GetDataService,
        private currencyService: CurrencyService,
        private filterService: FilterService
    ) {
        this.currencyUpdate = this.currencyService.updateSubject.subscribe(
            () => {
                this.currentCurrency = this.currencyService.getCurrentCurrency();
            },
            error => {
                throw new Error(error);
            }
        );
        this.filterUpdate = this.filterService.updateSubject.subscribe(
            data => {
                this.filter = [];
                data.forEach(item => {
                    if (item.checked) {
                        this.filter.push(item.stops);
                    }
                });
                this.filterTickets();
            },
            error => {
                throw new Error(error);
            }
        );
    }

    ngOnInit() {
        this.getDataService.getTickets().subscribe(
            data => {
                this.tickets = data.tickets || [];
                this.filteredTickets = this.tickets;
            });
    }

    private filterTickets(): void {
        if (!this.filter.length) {
            this.filteredTickets = this.tickets;
        } else {
            this.filteredTickets = this.tickets.filter(ticket => {
                if (this.filter.indexOf(ticket.stops) >= 0) {
                    return ticket;
                }
            });
        }
    }

}
