import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomecarsComponent } from './Components/homecars/homecars.component';
import { SearchComponent } from './Components/search/search.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { GridModule } from '@progress/kendo-angular-grid';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FilterModule } from '@progress/kendo-angular-filter';
import { PopupModule } from '@progress/kendo-angular-popup';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DatePipe } from '@angular/common';










@NgModule({
  declarations: [
    AppComponent,
    HomecarsComponent,
    SearchComponent,
    NavBarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    InputsModule,
    GridModule,
    FilterModule,
    PopupModule,
    DialogsModule,
    DateInputsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
