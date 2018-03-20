import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Subscription} from "rxjs/Subscription";
import {ContactsService} from "../contacts/contacts.service";

@Component({
    selector: 'app-clientes',
    templateUrl: './clientes.component.html',
    styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

    hasSelectedContacts: boolean;
    searchInput: FormControl;
    dialogRef: any;
    onSelectedContactsChangedSubscription: Subscription;

    constructor(private contactsService: ContactsService) {
        this.searchInput = new FormControl('');
    }

    ngOnInit() {
    }

}
