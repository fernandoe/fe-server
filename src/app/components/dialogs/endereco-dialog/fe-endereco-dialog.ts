import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EnderecosService} from '../../../services/endereco/enderecos.service';
import {ClientesService} from '../../../services/cliente/clientes.service';

@Component({
    selector: 'fe-endereco-dialog',
    templateUrl: 'fe-endereco-dialog.html'
})
export class FeEnderecoDialog implements OnInit {

    uuid: string;
    parentUuid: string;
    message: string;
    form: FormGroup;

    constructor(private builder: FormBuilder,
                private enderecosService: EnderecosService,
                private clientesService: ClientesService,
                private dialogRef: MatDialogRef<FeEnderecoDialog>,
                @Inject(MAT_DIALOG_DATA) private data
    ) {

    }

    ngOnInit(): void {
        this.parentUuid = this.data['clienteUuid'];
        this.uuid = this.data['uuid'];

        this.form = this.builder.group({
            uuid: [''],
            logradouro: [''],
            numero: [''],
            complemento: [''],
            bairro: [''],
            cidade: [''],
            estado: [''],
            cep: ['']
        });

        if (this.uuid) {
            this.enderecosService.get(this.uuid).subscribe(endereco => {
                this.form = this.builder.group({
                    uuid: [endereco.uuid],
                    logradouro: [endereco.logradouro],
                    numero: [endereco.numero],
                    complemento: [endereco.complemento],
                    bairro: [endereco.bairro],
                    cidade: [endereco.cidade],
                    estado: [endereco.estado],
                    cep: [endereco.cep]
                });
            });
        }
    }

    cancel() {
        this.dialogRef.close();
    }

    save() {
        const data = this.form.value;

        this.enderecosService.save(data)
            .subscribe(endereco => {
                if (!this.uuid) {
                    this.clientesService.patch(this.parentUuid, {
                        endereco: endereco.uuid
                    }).subscribe(cliente => {
                        this.dialogRef.close(endereco);
                    });
                } else {
                    this.dialogRef.close(endereco);
                }
            });
    }
}
