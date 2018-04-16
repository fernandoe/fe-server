import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {ContaService} from './conta.service';
import {Router} from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(public contaService: ContaService,
                private router: Router) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.contaService.getToken()}`
            }
        });

        return next.handle(request).do((event: HttpEvent<any>) => {
            // if (this.contaService.isLoggedIn()) {
            //     this.contaService.refreshToken();
            //
            //     return true;
            // } else {
            //     this.contaService.logout();
            //     this.router.navigate(['login']);
            //
            //     return false;
            // }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 403) {
                    this.router.navigate(['login']);
                }
            }
        });
    }
}
