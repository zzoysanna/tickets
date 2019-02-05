import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Connection} from '../interfaces/connection';

@Injectable({
    providedIn: 'root'
})
export class FilterService {
    public state: Connection[];
    public updateSubject = new Subject<any>();

    constructor() {
    }

    public setState(connectionsList: Connection[]): void {
        this.state = connectionsList;
        this.updateSubject.next(this.state);
    }
}
