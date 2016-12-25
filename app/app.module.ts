import { HttpModule } from '@angular/http';
import { DiscoverComponent } from './components/discover.component';
import { DiscoverService } from './services/discover.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { MovieAppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    HttpModule],
  declarations: [
    MovieAppComponent,
    DiscoverComponent],
  providers: [DiscoverService],
  bootstrap: [MovieAppComponent]
})
export class MovieAppModule { }
