import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Session} from './session.model';
import {environment} from '../../../../environments/environment';

@Injectable()
export class SessionsService {

    private baseUrl = environment.coachingServerUrl;

    constructor(private httpClient: HttpClient) {
    }

    get(uuid: string): Observable<Session> {
        return this.httpClient.get<Session>(this.baseUrl + '/api/v1/coaching/sessions/' + uuid);
    }

    create(session: Session): Observable<Session> {
        return this.httpClient.post<Session>(this.baseUrl + '/api/v1/coaching/sessions/', session);
    }

    save(session: Session): Observable<Session> {
        if (session.uuid) {
            return this.httpClient.put<Session>(`${this.baseUrl}/api/v1/coaching/sessions/${session.uuid}/`, session);
        } else {
            return this.httpClient.post<Session>(this.baseUrl + '/api/v1/coaching/sessions/', session);
        }
    }
}
