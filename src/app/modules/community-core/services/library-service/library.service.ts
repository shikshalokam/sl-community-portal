import { Injectable } from '@angular/core';
import { LibraryConfig } from './library.config';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private Http: HttpClient) { }


  // To get the Filter List
  getFilterList() {
    return this.Http.get(environment.base_url + LibraryConfig.filterList);
  }

  getLearningResources() {
    return this.Http.get(environment.base_url + LibraryConfig.learningResources);
  }
}
