import {Component, OnInit} from '@angular/core';
import {FilterService} from '../../../../services/filter.service';

@Component({
    selector: 'app-connections',
    templateUrl: './connections.component.html',
    styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent implements OnInit {
    public connectionsList = [
        {
            title: 'Без пересадок',
            stops: 0,
            checked: false
        },
        {
            title: '1 пересадка',
            stops: 1,
            checked: false
        },
        {
            title: '2 пересадки',
            stops: 2,
            checked: false
        },
        {
            title: '3 пересадки',
            stops: 3,
            checked: false
        }
    ];

    constructor(
        private filterService: FilterService
    ) {
    }

    ngOnInit() {
    }

    onChangeInput(connection) {
        connection.checked = !connection.checked;
        // обновить выдачу
        this.filterService.setState(this.connectionsList);
    }
}
