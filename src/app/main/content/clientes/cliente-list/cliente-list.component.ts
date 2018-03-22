import {Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '../../../../../@fuse/animations';
import {ClientesService} from '../../../../services/cliente/clientes.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {Cliente} from '../../../../services/models/cliente.model';

@Component({
    selector: 'fe-clientes-list',
    templateUrl: './cliente-list.component.html',
    styleUrls: ['./cliente-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ClienteListComponent implements OnInit, OnDestroy {

    dataSource: ClienteDataSource;
    displayedColumns = ['nome', 'email', 'telefone_celular', 'buttons'];

    constructor(private clientesService: ClientesService) {
    }

    ngOnInit(): void {
        this.dataSource = new ClienteDataSource(this.clientesService);
    }

    ngOnDestroy(): void {
    }

    editCliente(): void {

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
