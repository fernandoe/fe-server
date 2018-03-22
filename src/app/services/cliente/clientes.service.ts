import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Cliente} from '../models/cliente.model';

@Injectable()
export class ClientesService {

    // private serviceUrl = 'https://jsonplaceholder.typicode.com/users';
    private serviceUrl = 'http://localhost:9001/api/v1/clientes/';

    constructor(private http: HttpClient) {
    }

    search(): Observable<Cliente[]> {
        return this.http
            .get(this.serviceUrl)
            .map(result => result['results']);
    }

}
