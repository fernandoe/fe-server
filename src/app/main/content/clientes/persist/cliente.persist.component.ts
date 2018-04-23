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
import {ClientesService} from '../../../../services/cliente/clientes.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material';
import {FeEnderecoDialog} from '../../../../components/dialogs/endereco-dialog/fe-endereco-dialog';

@Component({
    templateUrl: './cliente.persist.component.html',
    styleUrls: ['./cliente.persist.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ClientePersistComponent implements OnInit, OnDestroy {

    cliente: Cliente;
    clienteForm: FormGroup;
    enderecoDialogRef: MatDialogRef<FeEnderecoDialog>;


    constructor(private formBuilder: FormBuilder,
                private clientesService: ClientesService,
                private route: ActivatedRoute,
                private router: Router,
                public dialog: MatDialog) {
    }

    ngOnInit() {
        var id = this.route.params.subscribe(params => {
            var uuid = params['uuid'];

            console.log('id:' + id);
            console.log('params :', params);

            this.clientesService.get(uuid)
                .subscribe(cliente => {
                        console.log('cliente');
                        console.log(cliente);
                        this.cliente = cliente;


                        this.clienteForm = this.formBuilder.group({
                            uuid: [this.cliente.uuid],
                            nome: [this.cliente.nome],
                            email: [this.cliente.email]
                        });


                    },
                    response => {
                        console.log('response:');
                        console.log(response);
                    });
        });

    }

    ngOnDestroy() {

    }

    salvar() {
        const data = this.clienteForm.value;
        this.clientesService.save(data)
            .subscribe(cliente => {
                console.log(cliente);
                this.router.navigate(['clientes']);
            });
    }

    adicionarEndereco() {
        this.enderecoDialogRef = this.dialog.open(FeEnderecoDialog, {});
    }
}
