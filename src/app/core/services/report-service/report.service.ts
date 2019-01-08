import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {  Headers,Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private https: Http,private http:HttpClient) { }
  createAuthorizationHeader(headers: Headers) {
    headers.append(environment.downloadReportHeaderLabel,environment.downloadReportHeaderValue); 
  }
  downloadReport(evedinceId) {
    console.log("service" + evedinceId);
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    
  }

  
}
