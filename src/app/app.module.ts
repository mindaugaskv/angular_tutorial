import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { LegoPartsComponent } from './components/lego-parts/lego-parts.component';
import { LegoPartDetailsComponent } from './components/lego-part-details/lego-part-details.component';
import { DataServiceService } from 'app/services/data-service.service';
import { InMemoryDataService } from "app/services/in-memory-data.service";

@NgModule({
  declarations: [
    AppComponent,
    LegoPartsComponent,
    LegoPartDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
