import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ClientesApi} from './clientes.api';
import {Cliente} from './cliente.model';
import {environment} from '../../../environments/environment';

@Injectable()
export class ClientesService {

    private baseUrl = environment.pessoaServerUrl;

    constructor(private httpClient: HttpClient) {
    }

    search(page: number): Observable<ClientesApi> {
        return this.httpClient.get<ClientesApi>(this.baseUrl + '/api/v1/clientes/?page=' + (page + 1));
    }

    get(uuid: string): Observable<Cliente> {
        return this.httpClient.get<Cliente>(this.baseUrl + '/api/v1/clientes/' + uuid);
    }

    create(): Observable<Cliente> {
        return this.httpClient.post<Cliente>(this.baseUrl + '/api/v1/clientes/novo', {});
    }

    save(cliente: Cliente): Observable<Cliente> {
        return this.httpClient.put<Cliente>(this.baseUrl + '/api/v1/clientes/' + cliente.uuid + '/', cliente);
    }

    patch(uuid: string, params: any) {
        return this.httpClient.patch(this.baseUrl + '/api/v1/clientes/' + uuid + '/', params);
    }
}
