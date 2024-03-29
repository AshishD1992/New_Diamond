import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CricketComponent } from './cricket/cricket.component';
import { FootballComponent } from './football/football.component';
import { TennisComponent } from './tennis/tennis.component';
import { ElectionComponent } from './election/election.component';
import {  SharedModule } from '../shared.module';
const routes: Routes = [
 
  {path:'cricket', component:  CricketComponent,},
  {path:'football', component:   FootballComponent,},
  {path:'tennis', component:  TennisComponent,},
  {path:'election', component:   ElectionComponent,},
]
@NgModule({
  declarations: [
    CricketComponent,
    FootballComponent,
    TennisComponent,
    ElectionComponent,
  
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
export class SportsModule { }
