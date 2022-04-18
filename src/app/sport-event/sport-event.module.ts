import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FullmarketComponent } from './fullmarket/fullmarket.component';
import { SharedModule } from '../shared.module';
const routes: Routes = [



    // {path:'', component: HomeComponent,},
   
    {path:'fullmarket', component: FullmarketComponent,},
   
    
  ];
  @NgModule({
    declarations: [
      
    
    FullmarketComponent
  ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
      SharedModule
    ],
    exports: [RouterModule],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ],
  })
  export class SportEventModule { }
  