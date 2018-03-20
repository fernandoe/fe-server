import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Subscription} from "rxjs/Subscription";
import {fuseAnimations} from "../../../../@fuse/animations";
import {ClientesService} from "../../../services/cliente/clientes.service";

@Component({
    selector: 'app-clientes',
    templateUrl: './clientes.component.html',
    styleUrls: ['./clientes.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ClientesComponent implements OnInit {

    hasSelectedContacts: boolean;
    searchInput: FormControl;
    dialogRef: any;
    onSelectedContactsChangedSubscription: Subscription;

    constructor(private clientesService: ClientesService) {
        this.searchInput = new FormControl('');
    }

    ngOnInit() {
    }
}
