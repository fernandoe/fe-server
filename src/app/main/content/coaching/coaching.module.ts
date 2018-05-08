import {NgModule} from '@angular/core';
import {SessionsModule} from './sessions/sessions.module';
import {RouterModule} from '@angular/router';
import {SessionsComponent} from './sessions/list/sessions.component';

const routes = [{
    path: 'sessoes',
    component: SessionsComponent
}];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes),
        SessionsModule,
    ],
    providers: [],
    entryComponents: []
})
export class CoachingModule {
}
