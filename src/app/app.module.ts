import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LegoPartsComponent } from './components/lego-parts/lego-parts.component';
import { LegoPartDetailsComponent } from './components/lego-part-details/lego-part-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LegoPartsComponent,
    LegoPartDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
