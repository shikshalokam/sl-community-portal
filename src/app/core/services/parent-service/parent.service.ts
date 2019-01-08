import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

export interface Config {
    message: string;
    status: number;
    result: [
        {
            name: string,
            id: string,
            externalId: string
        }
    ]
}
@Injectable()
export class ParentService {
    constructor(private http: HttpClient) { }
    configUrl;

   

   
   
}