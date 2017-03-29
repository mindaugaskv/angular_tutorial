import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataServiceService } from 'app/services/data-service.service';
import { LegoToy } from 'app/models/lego-toy';
import  { Location } from  '@angular/common';

@Component({
  selector: 'app-lego-toy-details',
  templateUrl: './lego-toy-details.component.html',
  styleUrls: ['./lego-toy-details.component.css'],
  providers: [DataServiceService]
})
export class LegoToyDetailsComponent implements OnInit {
  legoToy: LegoToy = new LegoToy();
  isLoading: boolean = false;

  constructor(private route: ActivatedRoute,
    private dataService: DataServiceService,
    private location:  Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loadItem(params['id'])
    });
  }

  goBack(): void{
    this.location.back();
  }

  loadItem(id: string){
    this.isLoading = true;

    this.dataService.getLegoToy(id)
        .then(t => { 
          this.legoToy = t;
          this.isLoading = false;
        });
  }
}
