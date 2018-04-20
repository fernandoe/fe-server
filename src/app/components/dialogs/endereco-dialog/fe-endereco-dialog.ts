import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
    selector: 'fe-endereco-dialog',
    templateUrl: 'fe-endereco-dialog.html'
})
export class FeEnderecoDialog implements OnInit {

    message: string;

    constructor(private dialogRef: MatDialogRef<FeEnderecoDialog>,
                @Inject(MAT_DIALOG_DATA) private data) {
    }

    ngOnInit(): void {
        this.message = this.data.message;
    }

    cancel() {
        this.dialogRef.close();
    }
}
