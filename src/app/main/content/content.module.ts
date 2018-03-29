import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FuseSharedModule} from '@fuse/shared.module';

import {FuseContentComponent} from 'app/main/content/content.component';
import {FuseContactsSelectedBarComponent} from './contacts/selected-bar/selected-bar.component';

@NgModule({
    declarations: [
        FuseContentComponent,
        FuseContactsSelectedBarComponent,
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
