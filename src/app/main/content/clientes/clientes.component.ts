import {AfterViewInit, Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '../../../../@fuse/animations';
import {ClientesService} from '../../../services/cliente/clientes.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'fe-clientes',
    templateUrl: './clientes.component.html',
    styleUrls: ['./clientes.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ClientesComponent implements AfterViewInit {

    // dataSource: ClienteDataSource;
    displayedColumns = ['nome', 'email', 'telefone_celular'];
    // ['nome', 'email', 'telefone_celular'];

    resultsLength = 0;
    isLoadingResults = false;
    isRateLimitReached = false;
    dataSource = new MatTableDataSource();

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private clientesService: ClientesService) {
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

        // this.clientesService.search(page)
        //     .map(data => {
        //         // console.log(data.results);
        //         this.resultsLength = data.count;
        //         return data.results;
        //     }).subscribe(data => this.dataSource.data = data);

    }

    // Observable.merge(this.sort.sortChange, this.paginator.page)
    //                  .startWith(null)
    //                  .switchMap(() => {
    //                      setTimeout(() => {
    //                          this.isLoadingResults = true;
    //                      });
    //                      return this.exampleDatabase!.getRepoIssues(
    //                          this.sort.active, this.sort.direction, this.paginator.pageIndex);
    //                  })
    //                  .map(data => {
    //                      // Flip flag to show that loading has finished.
    //                      this.isLoadingResults = false;
    //                      this.isRateLimitReached = false;
    //                      this.resultsLength = data.total_count;
    //
    //                      return data.items;
    //                  })
    //                  .catch(() => {
    //                      setTimeout(() => {
    //                          this.isLoadingResults = false;
    //                          // Catch if the GitHub API has reached its rate limit. Return empty data.
    //                          this.isRateLimitReached = true;
    //                      });
    //                      return Observable.of([]);
    //                  })
    //                  .subscribe(data => this.dataSource.data = data);


}

// export class ClienteDataSource extends DataSource<any> {
//
//     constructor(private clientesService: ClientesService) {
//         super();
//     }
//
//     connect(): Observable<Cliente[]> {
//         return this.clientesService.search();
//     }
//
//     disconnect(): void {
//     }
// }
