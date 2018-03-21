import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Cliente} from '../models/cliente.model';

// import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";

@Injectable()
// export class ClientesService implements Resolve<any> {
export class ClientesService {

    private serviceUrl = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http: HttpClient) {
    }

    search(): Observable<Cliente[]> {
        return this.http.get<Cliente[]>(this.serviceUrl);
    }

    // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    //     return undefined;
    // }

}
