import {Session} from './session.model';

export interface SessionsApi {
    results: Session[];
    count: number;
    next: string;
    previous: string;
}
