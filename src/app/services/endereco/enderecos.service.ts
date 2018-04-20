import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {EnderecosApi} from './enderecos.api';
import {Endereco} from './endereco.model';
import {environment} from '../../../environments/environment';

@Injectable()
export class EnderecosService {

    private baseUrl = environment.enderecoServerUrl;

    constructor(private httpClient: HttpClient) {
    }

    search(page: number): Observable<EnderecosApi> {
        return this.httpClient.get<EnderecosApi>(this.baseUrl + '/api/v1/enderecos/?page=' + (page + 1));
    }

    get(uuid: string): Observable<Endereco> {
        return this.httpClient.get<Endereco>(this.baseUrl + '/api/v1/enderecos/' + uuid);
    }

    create(): Observable<Endereco> {
        return this.httpClient.post<Endereco>(this.baseUrl + '/api/v1/enderecos/novo', {});
    }

    save(cliente: Endereco): Observable<Endereco> {
        return this.httpClient.put<Endereco>(this.baseUrl + '/api/v1/enderecos/' + cliente.uuid + '/', cliente);
    }
}
