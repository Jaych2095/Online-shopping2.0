import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from '@angular/core';

import { exhaustMap,take } from 'rxjs/operators';
import { AuthService } from "./auth-service";

@Injectable()
export class authIntercepterService implements HttpInterceptor{
    
constructor(private postService:AuthService){
    }

    intercept(req: HttpRequest<any>, next: HttpHandler){
        console.log("Request is on way.");
        this.postService.userdata.subscribe();
            return this.postService.userdata.pipe(
                take(1),
                exhaustMap(user=>{
                    if(!user)
                    {
                        return next.handle(req);
                    }
                    const modifiedRequest = req.clone({
                        params: new HttpParams().set('auth',user.password)});
                    return next.handle(modifiedRequest);
                })
        );
   
    }
}