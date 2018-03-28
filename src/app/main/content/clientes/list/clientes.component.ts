import {AfterViewInit, Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {ClientesService} from '../../../../services/cliente/clientes.service';
import {fuseAnimations} from '../../../../../@fuse/animations';
import {Router} from '@angular/router';

@Component({
    selector: 'fe-clientes',
    templateUrl: './clientes.component.html',
    styleUrls: ['./clientes.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ClientesComponent implements AfterViewInit {

    displayedColumns = ['nome', 'email', 'telefone_celular'];
    resultsLength = 0;
    isWorking = false;
    isLoadingResults = false;
    isRateLimitReached = false;
    dataSource = new MatTableDataSource();

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private clientesService: ClientesService,
                private router: Router) {
    }

    ngAfterViewInit(): void {
        Observable.merge(this.paginator.page)
            .startWith(null)
            .switchMap(() => {
                return this.clientesService.search(this.paginator.pageIndex);
            })
            .map(data => {
                this.resultsLength = data.count;
                return data.results;
            })
            .subscribe(data => this.dataSource.data = data);
    }

    clienteNovo() {
        this.isWorking = true;
        this.clientesService.create()
            .subscribe(cliente => {
                this.router.navigate(['clientes', cliente.uuid])
                this.isWorking = false;
            }, error => {
                console.log('ERROR: ', error);
                this.isWorking = false;
            });
    }
}
