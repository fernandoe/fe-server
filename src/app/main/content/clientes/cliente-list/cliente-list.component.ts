import {Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {FilesDataSource} from '../../contacts/contact-list/contact-list.component';
import {fuseAnimations} from '../../../../../@fuse/animations';
import {ClientesService} from "../../../../services/cliente/clientes.service";
import {Subscription} from "rxjs/Subscription";
import {FuseConfirmDialogComponent} from "../../../../../@fuse/components/confirm-dialog/confirm-dialog.component";
import {MatDialogRef} from "@angular/material";

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
    dataSource: FilesDataSource | null;
    displayedColumns = ['checkbox', 'avatar', 'name', 'email', 'phone', 'jobTitle', 'buttons'];
    selectedContacts: any[];
    checkboxes: {};

    onContactsChangedSubscription: Subscription;
    onSelectedContactsChangedSubscription: Subscription;
    onUserDataChangedSubscription: Subscription;

    dialogRef: any;

    confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;

    constructor(private clientesService: ClientesService,) {
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }
}
