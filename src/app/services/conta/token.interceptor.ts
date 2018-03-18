import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ContaService} from './conta.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public contaService: ContaService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Token ${this.contaService.getToken()}`
      }
    });

    return next.handle(request);
  }
}
