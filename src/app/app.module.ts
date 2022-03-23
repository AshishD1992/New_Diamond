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




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  
    FooterComponent,
    
    HomeComponent,
          ReportsComponent,
          RulesComponent,
         
         
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    CommonModule,
    SharedModule

    
=======
    BsDatepickerModule.forRoot()
>>>>>>> c8a7ba1b59a69dceacdcb10339dc350378244717
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
