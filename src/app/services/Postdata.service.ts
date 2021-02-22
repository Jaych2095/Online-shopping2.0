import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { Injectable } from "@angular/core";

import {Observable, throwError,BehaviorSubject} from "rxjs";
import {catchError} from "rxjs/operators";
import { Product } from "./product";

interface AuthResponseData{
    idToken:string,
    email:string,
    refreshToken:string,
    expiresIn:string,
    localId:string,
    registered?:boolean
}
@Injectable()

export class PostService{
    public data:Product[]=[];
    constructor(private http:HttpClient)
    {

    }
    public getData():Observable<Product[]>{
        return this.http.get<Product[]>("https://fakestoreapi.com/products/");
    }
    public getParticularData(id:number):Observable<Product[]>{
        return this.http.get<Product[]>("https://fakestoreapi.com/products/"+id);
    }
    
}