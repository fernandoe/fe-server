import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FilesDataSource} from '../../contacts/contact-list/contact-list.component';
import {fuseAnimations} from '../../../../../@fuse/animations';

@Component({
    selector: 'app-cliente-list',
    templateUrl: './cliente-list.component.html',
    styleUrls: ['./cliente-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ClienteListComponent implements OnInit {

    dataSource: FilesDataSource | null;
    checkboxes: {};

    constructor() {
    }

    ngOnInit() {
    }

}
