import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import { FooterComponent } from './footer/footer.component';
import { SharedModule } from './shared.module';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RulesComponent } from './rules/rules.component';
import { SetButtonValueComponent } from './set-button-value/set-button-value.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SportEventComponent } from './sport-event/sport-event.component';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  
    FooterComponent,
    
    HomeComponent,
          ReportsComponent,
          RulesComponent,
          SetButtonValueComponent,
          ChangePasswordComponent,
          SportEventComponent,
       
        
         
         
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    AccordionModule.forRoot(),
    BrowserAnimationsModule,

    CommonModule,
    SharedModule,

    
    BsDatepickerModule.forRoot()

  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
