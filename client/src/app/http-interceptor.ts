import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
import { AuthService } from './services/auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
constructor(private auth: AuthService) { }

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//if(this.auth.basicheader == "") return next.handle(req);
    
// Clone the request to add the new header.
const authReq = req.clone({ headers: req.headers.set("Authorization", "Basic "+this.auth.basicheader )});

//send the newly created request
return next.handle(authReq)
.catch((error, caught) => {
//intercept the respons error and displace it to the console
console.log("Error Occurred");
console.log(error);
//return the error to the method that called it
return Observable.throw(error);
}) as any;
}
}