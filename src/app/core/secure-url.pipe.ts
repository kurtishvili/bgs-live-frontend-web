import { Pipe, PipeTransform } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Pipe({
    name: 'secure'
})
export class SecureUrlPipe implements PipeTransform {

    constructor(
        private readonly httpClient: HttpClient,
        private readonly sanitizer: DomSanitizer) { }

        transform(url :string):Observable<SafeUrl>{
            return this.httpClient
            .get(url, {responseType: 'blob', headers: {skipJwtInterseptor : 'true'}},)
            .pipe(map(val => this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(val))));
        }
}