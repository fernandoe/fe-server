import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
    selector: 'fe-login-error-dialog',
    templateUrl: 'fe-login-error-dialog.html'
})
export class FELoginErrorDialog implements OnInit {

    message: string;

    constructor(private dialogRef: MatDialogRef<FELoginErrorDialog>,
                @Inject(MAT_DIALOG_DATA) private data) {
    }

    ngOnInit(): void {
        this.message = this.data.message;
    }

    close() {
        this.dialogRef.close();
    }
}
