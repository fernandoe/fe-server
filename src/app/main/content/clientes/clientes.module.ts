import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSidenavModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {FuseConfirmDialogModule} from '../../../../@fuse/components';
import {FuseSharedModule} from '../../../../@fuse/shared.module';
import {ClientesService} from '../../../services/cliente/clientes.service';
import {ClientesComponent} from './list/clientes.component';
import {ClientePersistComponent} from './persist/cliente.persist.component';
import {FeEnderecoDialog} from '../../../components/dialogs/endereco-dialog/fe-endereco-dialog';
import {EnderecosService} from '../../../services/endereco/enderecos.service';
import {FeEnderecoComponent} from '../../../../@fe/components/endereco/fe-endereco.component';

const routes = [{
    path: 'clientes',
    component: ClientesComponent
}, {
    path: 'clientes/:uuid',
    component: ClientePersistComponent
}];

@NgModule({
    declarations: [
        ClientesComponent,
        ClientePersistComponent,
        FeEnderecoDialog,
        FeEnderecoComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        CdkTableModule,

        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRippleModule,
        MatSidenavModule,
        MatTableModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MatTabsModule,

        FuseSharedModule,
        FuseConfirmDialogModule,

        CommonModule,
    ],
    providers: [
        ClientesService,
        EnderecosService
    ],
    entryComponents: [
        FeEnderecoDialog
    ]
})
export class ClientesModule {
}
