import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ContactsService {

    constructor(private http: HttpClient) {
    }

}
