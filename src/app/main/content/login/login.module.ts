import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule} from '@angular/material';

import {FuseSharedModule} from '@fuse/shared.module';

import {FuseLoginComponent} from './login.component';
import {FELoginErrorDialog} from '../../../components/dialogs/login-error-dialog/fe-login-error-dialog';

const routes = [{
    path: 'login',
    component: FuseLoginComponent
}];

@NgModule({
    declarations: [
        FuseLoginComponent,
        FELoginErrorDialog
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,

        FuseSharedModule
    ],
    entryComponents: [
        FELoginErrorDialog
    ]
})
export class LoginModule {
}
