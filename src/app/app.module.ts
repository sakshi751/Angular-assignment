import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CustomersModule } from './customers/customers.module';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { ItemsModule } from './items/items.module';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    CustomersModule,
    MatButtonModule,
    ItemsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
