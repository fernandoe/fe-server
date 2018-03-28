import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Conta} from './conta.model';

@Injectable()
export class ContaService {

    private baseUrl = 'http://localhost:9000';

    constructor(private httpClient: HttpClient) {
    }

    login(email: string, password: string): Observable<boolean> {
        return this.httpClient.post(this.baseUrl + '/auth/', {
            'email': email,
            'password': password
        }).map((response: Response) => {
            const token = response['token'];
            this.saveToken(token);
            return true;
        });
    }

    logout() {
        localStorage.removeItem('token');
    }

    saveToken(token: string) {
        localStorage.setItem('token', token);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    isAuthenticated() {
        return this.getToken() != null;
    }

    me(): Observable<Conta> {
        return this.httpClient.get<Conta>(this.baseUrl + '/me');
    }
}
