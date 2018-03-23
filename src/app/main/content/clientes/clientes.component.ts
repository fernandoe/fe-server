import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '../../../../@fuse/animations';
import {ClientesService} from '../../../services/cliente/clientes.service';
import {Observable} from 'rxjs/Observable';
import {Cliente} from '../../../services/models/cliente.model';
import {DataSource} from '@angular/cdk/collections';

@Component({
    selector: 'app-clientes',
    templateUrl: './clientes.component.html',
    styleUrls: ['./clientes.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ClientesComponent implements OnInit {

    dataSource: ClienteDataSource;
    displayedColumns = ['nome', 'email', 'telefone_celular'];

    constructor(private clientesService: ClientesService) {
    }

    ngOnInit(): void {
        this.dataSource = new ClienteDataSource(this.clientesService);
    }
}

export class ClienteDataSource extends DataSource<any> {

    constructor(private clientesService: ClientesService) {
        super();
    }

    connect(): Observable<Cliente[]> {
        return this.clientesService.search();
    }

    disconnect(): void {
    }
}
