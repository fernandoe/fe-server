import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClienteListComponent} from './cliente-list/cliente-list.component';
import {RouterModule} from '@angular/router';
import {MatCheckboxModule, MatIconModule, MatMenuModule, MatTableModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';

const routes = [{
    path: 'clientes',
    component: ClienteListComponent
}];

@NgModule({
    declarations: [
        ClienteListComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CdkTableModule,
        FormsModule,

        MatCheckboxModule,
        MatIconModule,
        MatMenuModule,
        MatTableModule,
        CommonModule
    ],
})
export class ClientesModule {
}
