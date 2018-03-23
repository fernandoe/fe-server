import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClienteListComponent} from './cliente-list/cliente-list.component';
import {RouterModule} from '@angular/router';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule, MatPaginatorModule,
    MatRippleModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {ClientesComponent} from "./clientes.component";
import {FuseContactsSelectedBarComponent} from "../contacts/selected-bar/selected-bar.component";
import {FuseContactsMainSidenavComponent} from "../contacts/sidenavs/main/main.component";
import {FuseContactsComponent} from "../contacts/contacts.component";
import {FuseContactsContactFormDialogComponent} from "../contacts/contact-form/contact-form.component";
import {FuseContactsContactListComponent} from "../contacts/contact-list/contact-list.component";
import {FuseConfirmDialogModule} from "../../../../@fuse/components";
import {FuseSharedModule} from "../../../../@fuse/shared.module";
import {ClientesService} from "../../../services/cliente/clientes.service";


const routes = [{
    path: 'clientes',
    component: ClientesComponent,
    // resolve: {
    //     contacts: ClientesService
    // }
}];

@NgModule({
    declarations: [
        FuseContactsSelectedBarComponent,
        FuseContactsMainSidenavComponent,
        FuseContactsContactFormDialogComponent,

        ClientesComponent,
        ClienteListComponent,
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

        FuseSharedModule,
        FuseConfirmDialogModule,

        CommonModule
    ],
    providers: [
        ClientesService
    ]
})
export class ClientesModule {

    newContact() {
    }

}
