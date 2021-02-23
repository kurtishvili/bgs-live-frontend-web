import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastService } from 'src/app/bgslive-components/bgs-toast/toast.service';
import { Severity } from 'src/app/enums/severity-enum';
import { AppConfigurationService } from '../app-configuration/app-configuration.service';
import { Constants } from '../constants';

@Injectable()
export class HttpErrorHandlerInterceptor implements HttpInterceptor {

    constructor(
        private readonly toastService: ToastService,
        private readonly cookieService: CookieService,
        private readonly router: Router,
        private readonly appConfigService: AppConfigurationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(catchError(error => {
                if (error instanceof HttpErrorResponse) {
                    if (error.status == 400) {
                        const errorMessage =
                            error.error.errorCode ? this.appConfigService.errorCodes[error.error.errorCode] || 'Something Went Wrong'
                                : error.error.errors ? error.error.title : this.appConfigService.dictionary['something_went_wrong'];

                        this.toastService.add({ severity: Severity.Error , message: errorMessage })
                    }
                    else if (error.status == 401) {
                        this.cookieService.delete(Constants.KEY_AUTH_USER, "/");
                        this.router.navigate(['account', 'login']);
                    }
                    else if (error.status == 403) {
                        this.toastService.add({ 
                            severity: Severity.Error,
                             message: this.appConfigService.dictionary['not_authorized']  })
                    }
                    else {
                        this.toastService.add({ 
                            severity: Severity.Error,
                             message: this.appConfigService.dictionary['something_went_wrong']  })
                    }
                }
                return throwError(error);
            }));
    }
}