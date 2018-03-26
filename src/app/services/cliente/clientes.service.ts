import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ClientesApi} from './clientes.api';
import {Cliente} from './cliente.model';

@Injectable()
export class ClientesService {

    private baseUrl = 'http://localhost:9001';

    constructor(private http: HttpClient) {
    }

    search(page: number): Observable<ClientesApi> {
        return this.http.get<ClientesApi>(this.baseUrl + '/api/v1/clientes/?page=' + (page + 1));
    }

    get(uuid: string): Observable<Cliente> {
        return this.http.get<Cliente>(this.baseUrl + '/api/v1/clientes/' + uuid);
    }

    save(cliente: Cliente): Observable<Cliente> {
        return this.http.put<Cliente>(this.baseUrl + '/api/v1/clientes/' + cliente.uuid + '/', cliente);
    }
}
