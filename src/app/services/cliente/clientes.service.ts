import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ClientesApi} from './clientes.api';

@Injectable()
export class ClientesService {

    private serviceUrl = 'http://localhost:9001/api/v1/clientes/?page=';

    constructor(private http: HttpClient) {
    }

    search(page: number): Observable<ClientesApi> {
        return this.http.get<ClientesApi>(this.serviceUrl + (page + 1));
    }
}
