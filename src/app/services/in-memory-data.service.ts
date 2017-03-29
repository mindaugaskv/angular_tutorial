import { Injectable } from '@angular/core';
import { LegoPart } from "app/models/lego-part";
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class InMemoryDataService extends InMemoryDbService {
  createDb(){
    return {
      parts: cArray
    };
  }
}

const cArray: LegoPart[] =[
      {
        id: '1',
        color: 'reiksme',
        size: 'reiksme',
        type: 'reiksme',
        shape: 'reiksme'
      },
      {
        id: '2',
        color: 'reiksme1',
        size: 'reiksme1',
        type: 'reiksme1',
        shape: 'reiksm1e'
      }
    ];
