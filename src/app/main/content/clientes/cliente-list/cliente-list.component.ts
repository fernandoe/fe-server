import {Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '../../../../../@fuse/animations';
import {ClientesService} from '../../../../services/cliente/clientes.service';
import {Subscription} from 'rxjs/Subscription';
import {FuseConfirmDialogComponent} from '../../../../../@fuse/components/confirm-dialog/confirm-dialog.component';
import {MatDialogRef} from '@angular/material';
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

    @ViewChild('dialogContent') dialogContent: TemplateRef<any>;
    contacts: any;
    user: any;
    selectedContacts: any[];
    checkboxes: {};
    onContactsChangedSubscription: Subscription;
    onSelectedContactsChangedSubscription: Subscription;
    onUserDataChangedSubscription: Subscription;
    dialogRef: any;
    confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;

    dataSource = new ClienteDataSource(this.clientesService);
    displayedColumns = ['name', 'email', 'phone', 'buttons'];

    constructor(private clientesService: ClientesService) {
    }

    ngOnInit(): void {
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
