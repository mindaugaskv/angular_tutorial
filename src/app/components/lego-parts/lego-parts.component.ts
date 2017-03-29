import { Component, OnInit } from '@angular/core';
import { LegoPart } from 'app/models/lego-part';
import { LegoToy } from "app/models/lego-toy";

@Component({
  selector: 'app-lego-parts',
  templateUrl: './lego-parts.component.html',
  styleUrls: ['./lego-parts.component.css']
})
export class LegoPartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  parts: LegoPart[] = [
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
    },
    {
      spalva: 'reiksme2',
      dydis: 'reiksme2',
      tipas: 'reiksme2',
      forma: 'reiksm2e'
    },
    {
      spalva: 'reiksme3',
      dydis: 'reiksme3',
      tipas: 'reiksme3',
      forma: 'reiksm3e'
    }
  ];

  item: LegoPart = {
    spalva: 'reiksme',
    dydis: 'reiksme',
    tipas: 'reiksme',
    forma: 'reiksme'
  }

  toy: LegoToy = {
    name: '', 
    description: '', 
    price: 1,
    parts: null
  };

  divToggle: boolean= true;

  toggle(){
    this.divToggle = !this.divToggle;
  }

  myChildEventFired(event: string){
    console.log(event);
  }

}

