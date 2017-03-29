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
  parts: LegoPart[];
  item: LegoPart;
  divToggle: boolean = true;
  isLoading: boolean = false;

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.isLoading = true;
    this.dataService.getData().then(c => {
      this.parts = c;
      this.isLoading = false;
    });
  }

  addNewItem(item: LegoPart){
    //TODO: turi kviesti WebAPI:
    this.parts.push(item);

    this.item = null;
  }

  addNewPart(){
    this.item = new LegoPart();
  }
}

