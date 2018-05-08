import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FuseSharedModule} from '@fuse/shared.module';

import {FuseContentComponent} from 'app/main/content/content.component';

import {
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatRippleModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';
import {CoachingModule} from './coaching/coaching.module';

@NgModule({
    declarations: [
        FuseContentComponent,
    ],
    imports: [
        RouterModule,

        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatRippleModule,
        MatSidenavModule,
        MatTableModule,

        FuseSharedModule,

        CoachingModule,
    ],
    exports: [
        FuseContentComponent
    ]
})
export class FuseContentModule {
}
