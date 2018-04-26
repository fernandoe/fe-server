import {Endereco} from './endereco.model';

export interface EnderecosApi {
    results: Endereco[];
    count: number;
    next: string;
    previous: string;
}
