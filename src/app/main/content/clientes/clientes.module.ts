import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClienteListComponent} from "./cliente-list/cliente-list.component";
import {RouterModule} from "@angular/router";

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

        CommonModule
    ],
})
export class ClientesModule {
}
