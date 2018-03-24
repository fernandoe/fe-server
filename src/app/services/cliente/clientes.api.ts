import {Cliente} from './cliente.model';

export interface ClientesApi {
    results: Cliente[];
    count: number;
    next: string;
    previous: string;
}
