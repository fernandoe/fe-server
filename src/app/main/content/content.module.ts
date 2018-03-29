import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FuseSharedModule} from '@fuse/shared.module';

import {FuseContentComponent} from 'app/main/content/content.component';
import {FuseContactsSelectedBarComponent} from './contacts/selected-bar/selected-bar.component';
import {FuseContactsMainSidenavComponent} from './contacts/sidenavs/main/main.component';

@NgModule({
    declarations: [
        FuseContentComponent,
        FuseContactsSelectedBarComponent,
        FuseContactsMainSidenavComponent,
    ],
    imports: [
        RouterModule,

        FuseSharedModule,
    ],
    exports: [
        FuseContentComponent
    ]
})
export class FuseContentModule {
}
