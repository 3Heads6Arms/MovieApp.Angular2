import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { MovieAppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, MaterialModule.forRoot()],
  declarations: [MovieAppComponent],
  bootstrap: [MovieAppComponent]
})
export class MovieAppModule { }
