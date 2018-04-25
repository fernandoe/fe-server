import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import {fuseAnimations} from '../../../../../@fuse/animations';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Cliente} from '../../../../services/cliente/cliente.model';
import {ClientesService} from '../../../../services/cliente/clientes.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material';
import {FeEnderecoDialog} from '../../../../components/dialogs/endereco-dialog/fe-endereco-dialog';
import {EnderecosService} from '../../../../services/endereco/enderecos.service';
import {Endereco} from '../../../../services/endereco/endereco.model';

@Component({
    templateUrl: './cliente.persist.component.html',
    styleUrls: ['./cliente.persist.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ClientePersistComponent implements OnInit, OnDestroy {

    uuid: string;
    cliente: Cliente;
    endereco: Endereco;
    clienteForm: FormGroup;
    enderecoDialogRef: MatDialogRef<FeEnderecoDialog>;


    constructor(private formBuilder: FormBuilder,
                private clientesService: ClientesService,
                private enderecosService: EnderecosService,
                private route: ActivatedRoute,
                private router: Router,
                public dialog: MatDialog) {
    }

    ngOnInit() {
        this.clienteForm = new FormGroup({
            nome: new FormControl(),
            email: new FormControl()
        });

        this.route.params.subscribe(params => {
            this.uuid = params['uuid'];
            console.log('PARAMS:', params);

            this.clientesService.get(this.uuid)
                .subscribe(cliente => {
                        console.log('CLIENTE:', cliente);

                        this.cliente = cliente;
                        this.clienteForm = this.formBuilder.group({
                            uuid: [this.cliente.uuid],
                            nome: [this.cliente.nome],
                            email: [this.cliente.email]
                        });

                        if (cliente.endereco) {
                            this.enderecosService.get(cliente.endereco).subscribe(endereco => {
                                console.log('ENDERECO:', endereco);
                                this.endereco = endereco;
                            }, error => {
                                console.log('ERROR (EnderecosService.get):', error);
                            });
                        }
                    },
                    response => {
                        console.log('ERROR:', response);
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
        this.enderecoDialogRef = this.dialog.open(FeEnderecoDialog, {
            data: {
                clienteUuid: this.uuid
            }
        });
    }
}
