import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Conta} from './conta.model';
import {environment} from '../../../environments/environment';

import * as jwt from 'jsonwebtoken';
import * as moment from 'moment';

@Injectable()
export class ContaService {

    private baseUrl = environment.contaServerUrl;

    constructor(private httpClient: HttpClient) {
    }

    login(email: string, password: string): Observable<boolean> {
        return this.httpClient.post(this.baseUrl + '/auth/', {
            'email': email,
            'password': password
        }).map((response: Response) => {
            const token = response['token'];
            const payload = <JWTPayload> jwt.decode(token);
            const expiresAt = moment.unix(payload.exp);

            localStorage.setItem('token', token);
            localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));

            return true;
        });
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('expires_at');
    }

    getToken() {
        return localStorage.getItem('token');
    }


    refreshToken() {
        if (moment().isBetween(this.getExpiration().subtract(1, 'days'), this.getExpiration())) {
            return this.http.post(
                this.apiRoot.concat('refresh-token/'),
                {token: this.token}
            ).do(response => this.setSession(response)).shareReplay().subscribe();
        }
    }

    getExpiration() {
        const expiration = localStorage.getItem('expires_at');
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }

    isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    me(): Observable<Conta> {
        return this.httpClient.get<Conta>(this.baseUrl + '/me');
    }

    private setSession(authResult) {
        const token = authResult.token;
        const payload = <JWTPayload> jwt.decode(token);
        const expiresAt = moment.unix(payload.exp);

        localStorage.setItem('token', authResult.token);
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    }
}
