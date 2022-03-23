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






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  
    FooterComponent,
    
    HomeComponent,
          ReportsComponent,
         
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    SharedModule

    
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
