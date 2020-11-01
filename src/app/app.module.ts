import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidepanelComponent } from './sidepanel/sidepanel.component';
import { QuotesComponent } from './quotes/quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    SidepanelComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
