import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/main/sidebar/sidebar.component';
import { OffersComponent } from './components/main/offers/offers.component';
import { ConnectionsComponent } from './components/main/sidebar/connections/connections.component';
import { CurrencyComponent } from './components/main/sidebar/currency/currency.component';
import { TicketComponent } from './components/main/offers/ticket/ticket.component';
import {GetDataService} from './services/get-data.service';
import {HttpClientModule} from '@angular/common/http';
import {CurrencyService} from './services/currency.service';
import {FilterService} from './services/filter.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
    OffersComponent,
    ConnectionsComponent,
    CurrencyComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GetDataService, CurrencyService, FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
