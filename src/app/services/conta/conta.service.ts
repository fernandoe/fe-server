import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ContaService {

  constructor(private httpClient: HttpClient) {
  }

  login(email: string, password: string) {
    this.httpClient.post('http://127.0.0.1:9000/auth/', {
      'email': email,
      'password': password
    }).subscribe(response => {
      console.log('Response:' + response);
      const token = response['token'];
      this.saveToken(token);
      return true;
    }, err => {
      console.log(err);
    });
  }

  logout() {
    localStorage.removeItem('token');
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    const token = localStorage.getItem('token');
    if (token != null) {
      return token;
    }
    return null;
  }

  isAuthenticated() {
    return this.getToken() != null;
  }
}
