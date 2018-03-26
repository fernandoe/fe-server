import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ClientesApi} from './clientes.api';
import {Cliente} from './cliente.model';

@Injectable()
export class ClientesService {

    private serviceUrl = 'http://localhost:9001/api/v1/clientes/?page=';
    private loadUrl = 'http://localhost:9001/api/v1/clientes/';

    constructor(private http: HttpClient) {
    }

    search(page: number): Observable<ClientesApi> {
        return this.http.get<ClientesApi>(this.serviceUrl + (page + 1));
    }

    get(uuid: string): Observable<Cliente> {
        return this.http.get<Cliente>(this.loadUrl + uuid);
    }
}
