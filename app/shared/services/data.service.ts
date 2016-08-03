import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http: Http) {
  }

  getJson(url: string, update: number) {
    console.log(`reading ${ url }`);
    if (update !== -1) {
      return Observable.timer(0, update)
        .flatMap(() => this.http.get(url))
        .map(response => response.json());
    } else {
      return this.http.get(url)
        .map(response => response.json());
    }
  }

}
