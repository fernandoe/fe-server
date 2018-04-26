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

    get(uuid: string): Observable<Endereco> {
        return this.httpClient.get<Endereco>(this.baseUrl + '/api/v1/enderecos/' + uuid);
    }

    create(endereco: Endereco): Observable<Endereco> {
        return this.httpClient.post<Endereco>(this.baseUrl + '/api/v1/enderecos/', endereco);
    }

    save(endereco: Endereco): Observable<Endereco> {
        console.log('EnderecosService.save:', endereco);
        if (endereco.uuid) {
            console.log('Salvando um endereço existente...');
            return this.httpClient.put<Endereco>(`${this.baseUrl}/api/v1/enderecos/${endereco.uuid}/`, endereco);
        } else {
            console.log('Criando um novo endereço...');
            return this.httpClient.post<Endereco>(this.baseUrl + '/api/v1/enderecos/', endereco);
        }
    }
}
