import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Ticket} from '../../../../interfaces/ticket';

@Component({
    selector: 'app-ticket',
    templateUrl: './ticket.component.html',
    styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit, OnChanges {
    @Input() data: Ticket;
    @Input() currency: string;
    @Input() rate: number;
    public price: number;

    constructor() {
    }

    ngOnInit() {
        if (this.data && 'price' in this.data) {
            this.price = Math.ceil(this.data.price / this.rate);
        }
    }

    // при изменении валюты обновляем цены билетов
    ngOnChanges(changes: SimpleChanges): void {
        if ('currency' in changes || 'data' in changes) {
            this.price = Math.ceil(this.data.price / this.rate);
        }
    }
}
