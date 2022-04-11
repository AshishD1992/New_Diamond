import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FullmarketComponent } from './fullmarket/fullmarket.component';

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
    ],
    exports: [RouterModule],
  })
  export class SportEventModule { }
  