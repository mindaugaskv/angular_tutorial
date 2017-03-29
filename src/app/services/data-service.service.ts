import { Injectable } from '@angular/core';
import { LegoPart } from "app/models/lego-part";
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataServiceService {

  constructor(private http: Http) { 
  }

  getData(): Promise<LegoPart[]>{
    return this.http.get('/api/parts')
    .delay(2000)
    .toPromise()
    .then(response => {
        return response.json().data as LegoPart[];
    });

    // return new Promise<LegoPart[]>(
    //   response => {
    //     response(cArray)
    //   }
    // );     
  }
}

const cArray: LegoPart[] =[
      {
        spalva: 'reiksme',
        dydis: 'reiksme',
        tipas: 'reiksme',
        forma: 'reiksme'
      },
      {
        spalva: 'reiksme1',
        dydis: 'reiksme1',
        tipas: 'reiksme1',
        forma: 'reiksm1e'
      }
    ];
