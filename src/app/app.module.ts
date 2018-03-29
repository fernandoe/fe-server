import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import 'hammerjs';

import {FuseModule} from '@fuse/fuse.module';
import {FuseSharedModule} from '@fuse/shared.module';

import {fuseConfig} from './fuse-config';

import {AppComponent} from './app.component';
import {FuseMainModule} from './main/main.module';
import {LoginModule} from './main/content/login/login.module';
import {TokenInterceptor} from './services/conta/token.interceptor';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {FuseFakeDbService} from './fuse-fake-db/fuse-fake-db.service';
import {ClientesModule} from './main/content/clientes/clientes.module';


const appRoutes: Routes = [
    {
        path: '**',
        redirectTo: 'clientes'
    }
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),

        InMemoryWebApiModule.forRoot(FuseFakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),

        // Fuse Main and Shared modules
        FuseModule.forRoot(fuseConfig),
        FuseSharedModule,
        FuseMainModule,

        LoginModule,
        ClientesModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
    }],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
