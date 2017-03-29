import { Component, OnInit } from '@angular/core';
import { LegoPart } from 'app/models/lego-part';
import { LegoToy } from "app/models/lego-toy";
import { DataServiceService } from "app/services/data-service.service";

@Component({
  selector: 'app-lego-parts',
  templateUrl: './lego-parts.component.html',
  styleUrls: ['./lego-parts.component.css'],
  providers: [DataServiceService]
})
export class LegoPartsComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getData().then(c => this.parts = c );
  }

  parts: LegoPart[];

  item: LegoPart;

  toy: LegoToy = {
    name: '', 
    description: '', 
    price: 1,
    parts: null
  };

  divToggle: boolean= true;

  addNewItem(item: LegoPart){
    this.parts.push(item);
    this.item = null;
  }

  addNewPart(){
    this.item = new LegoPart();
  }
}

