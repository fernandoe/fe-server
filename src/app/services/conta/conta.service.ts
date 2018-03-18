import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ContaService {

  constructor(private httpClient: HttpClient) {
  }

  login(email: string, password: string): Observable<boolean> {
    return this.httpClient.post('http://127.0.0.1:9000/auth/', {
      'email': email,
      'password': password
    }).map((response: Response) => {
      const token = response['token'];
      this.saveToken(token);
      return true;
    });


    // return this.httpClient.post('http://127.0.0.1:9000/auth/', {
    //   'email': email,
    //   'password': password
    // }).subscribe(response => {
    //   console.log('Response:' + response);
    //   const token = response['token'];
    //   this.saveToken(token);
    //   return true;
    // }, err => {
    //   console.log(err);
    // });
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
}
