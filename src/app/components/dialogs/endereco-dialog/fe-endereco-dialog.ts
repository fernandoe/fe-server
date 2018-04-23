import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EnderecosService} from '../../../services/endereco/enderecos.service';
import {Endereco} from '../../../services/endereco/endereco.model';

@Component({
    selector: 'fe-endereco-dialog',
    templateUrl: 'fe-endereco-dialog.html'
})
export class FeEnderecoDialog implements OnInit {

    message: string;
    form: FormGroup;
    endereco: Endereco;

    constructor(private builder: FormBuilder,
                private enderecosService: EnderecosService,
                private dialogRef: MatDialogRef<FeEnderecoDialog>,
                @Inject(MAT_DIALOG_DATA) private data
    ) {

    }

    ngOnInit(): void {
        this.form = this.builder.group({
            // uuid: [this.endereco.uuid],
            // logradouro: [this.endereco.logradouro],
            // numero: [this.endereco.numero],
            // complemento: [this.endereco.complemento],
            // bairro: [this.endereco.bairro],
            // cidade: [this.endereco.cidade],
            // estado: [this.endereco.estado],
            // cep: [this.endereco.cep],
        });
    }

    cancel() {
        this.dialogRef.close();
    }

    save() {
        console.log('<salvar>');
        const data = this.form.value;
        console.log('data', data);
        this.enderecosService.create(data)
            .subscribe(endereco => {
                console.log(endereco);
            });
        console.log('</salvar>');
    }
}
