import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemComponent } from './main/item/item.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxFilterSearchModule } from 'ngx-filter-search';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, MainComponent, ItemComponent, MapComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxFilterSearchModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
