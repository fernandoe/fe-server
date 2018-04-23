import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Endereco} from './endereco.model';
import {environment} from '../../../environments/environment';

@Injectable()
export class EnderecosService {

    private baseUrl = environment.enderecoServerUrl;

    constructor(private httpClient: HttpClient) {
    }

    create(endereco: Endereco): Observable<Endereco> {
        return this.httpClient.post<Endereco>(this.baseUrl + '/api/v1/enderecos/', endereco);
    }
}
