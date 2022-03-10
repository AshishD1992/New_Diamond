import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeenpattiComponent } from './teenpatti/teenpatti.component';
import { RouletteComponent } from './roulette/roulette.component';
import { UpdownComponent } from './updown/updown.component';
import { CardComponent } from './card/card.component';
import { PokerComponent } from './poker/poker.component';
import { SicboComponent } from './sicbo/sicbo.component';
import { AnderbaharComponent } from './anderbahar/anderbahar.component';
import { OnedayComponent } from './oneday/oneday.component';
import { MuflisComponent } from './muflis/muflis.component';
import { T20Component } from './t20/t20.component';
import { CasinometerComponent } from './casinometer/casinometer.component';

const routes: Routes = [
  {path:'teenpatti', component: TeenpattiComponent,},
  {path:'roulette', component: RouletteComponent,},
  {path:'updown', component:  UpdownComponent,},
  {path:'card', component:  CardComponent,},
  {path:'poker', component: PokerComponent,},
  {path:'sicbo', component: SicboComponent,},
  {path:'anderbahar', component: AnderbaharComponent ,},
  {path:'oneday', component: OnedayComponent ,},
  {path:'muflis', component: MuflisComponent ,},
  {path:'t20', component: T20Component ,},
   {path:'t20', component: T20Component ,},
   {path:'meter', component: CasinometerComponent ,},
]

@NgModule({
  declarations: [
    TeenpattiComponent,
    RouletteComponent,
    UpdownComponent,
    CardComponent,
    PokerComponent,
    SicboComponent,
    AnderbaharComponent,
    OnedayComponent,
    MuflisComponent,
    T20Component,
    CasinometerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class ExchangeGameModule { }
