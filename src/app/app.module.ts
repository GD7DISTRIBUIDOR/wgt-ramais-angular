import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from '@angular/forms';
import { RamaisListComponent } from './modules/ramais/ramais-list/ramais-list.component';
import { APP_BASE_HREF, CommonModule } from '@angular/common';

import { APP_CONFIG } from './app.config';

@NgModule({
  declarations: [
    AppComponent,
    RamaisListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: APP_CONFIG.APP_BASE}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
