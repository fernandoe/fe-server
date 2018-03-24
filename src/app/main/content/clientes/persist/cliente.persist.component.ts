import {AfterViewInit, Component, ViewEncapsulation} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import {fuseAnimations} from '../../../../../@fuse/animations';

@Component({
    templateUrl: './cliente.persist.component.html',
    styleUrls: ['./cliente.persist.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ClientePersistComponent implements AfterViewInit {


    constructor() {
    }

    ngAfterViewInit(): void {
    }
}
