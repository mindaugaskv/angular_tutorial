import { Injectable } from '@angular/core';
import { LegoPart } from "app/models/lego-part";
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { LegoToy } from "app/models/lego-toy";

@Injectable()
export class InMemoryDataService extends InMemoryDbService {
  createDb(){
    return {
      parts: cArrayParts,
      toys: cArrayToys
    };
  }
}

const cArrayParts: LegoPart[] =[
      {
        id: '1',
        name: '',
        color: 'reiksme',
        size: 'reiksme',
        type: 'reiksme',
        shape: 'reiksme',
        imageUrl: 'https://www.bricklink.com/PL/11293pb001.jpg'
      },
      {
        id: '2',
        name: '',
        color: 'reiksme1',
        size: 'reiksme1',
        type: 'reiksme1',
        shape: 'reiksm1e',
        imageUrl: 'https://www.bricklink.com/PL/87615pb05.jpg'
      }
    ];


const cArrayToys: LegoToy[] = [
      {
        id: '1',
        name: 'Laivas',
        description: 'Piratų laivas',
        price: 100,
        parts: [
          {
            id: '1',
            name: 'Paprasta kaladėlė x3',
            color: 'Raudona',
            size: 'Didelė',
            type: 'Paprasta',
            shape: 'Stačiakampė',
            imageUrl: 'https://www.bricklink.com/PL/3003old.jpg'
          }]
      }
    ];