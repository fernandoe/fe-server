import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import {fuseAnimations} from '../../../../../@fuse/animations';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Cliente} from '../../../../services/cliente/cliente.model';

@Component({
    templateUrl: './cliente.persist.component.html',
    styleUrls: ['./cliente.persist.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ClientePersistComponent implements OnInit, OnDestroy {

    cliente: Cliente;
    clienteForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.clienteForm = this.formBuilder.group({
            uuid: '',
            nome: '',
            email: ''
        });
    }

    ngOnDestroy() {

    }
}
