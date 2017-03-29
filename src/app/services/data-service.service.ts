import { Injectable } from '@angular/core';
import { LegoPart } from "app/models/lego-part";
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { LegoToy } from "app/models/lego-toy";

@Injectable()
export class DataServiceService {

  constructor(private http: Http) {
  }

  getLegoToys(): Promise<LegoToy[]> {
    return this.http.get('/api/toys')
      .delay(2000)
      .toPromise()
      .then(response => {
        return response.json().data as LegoToy[];
      });
  }

  getLegoParts(): Promise<LegoPart[]> {
    return this.http.get('/api/parts')
      .delay(2000)
      .toPromise()
      .then(response => {
        return response.json().data as LegoPart[];
      });    
  }
}
