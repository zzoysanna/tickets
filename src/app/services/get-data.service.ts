import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class GetDataService {

    constructor(
        private http: HttpClient
    ) {
    }

    public getTickets(): Observable<any> {
        const url = 'assets/tickets.json';
        return this.http.get(url).pipe(
            map(data => {
                return data;
            }),
            catchError(error => {
                throw new Error(error);
            })
        );

    }
}
