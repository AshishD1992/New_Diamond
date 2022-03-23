import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';
import { SetButtonValueComponent } from './set-button-value/set-button-value.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
const routes: Routes = [



  {path:'', component: HomeComponent,},
  {path:'header', component:HeaderComponent,},
  {path:'nav', component:NavbarComponent,},
  {path:'sidenav', component: SidenavComponent,},
  {path:'footer', component: FooterComponent,},
  {path:'rules', component:  RulesComponent,},
  {path:'set-button-value', component: SetButtonValueComponent,},
  {path:'change-password', component: ChangePasswordComponent,},
  {
    path: 'sports',
    loadChildren: () =>
      import('./sports/sports.module').then((m) => m.SportsModule),
  },
  {
    path: 'exchanges',
    loadChildren: () =>
      import('./exchanges/exchanges.module').then((m) => m.ExchangeGameModule),
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./reports/repots.module').then((m) => m.ReportsModule),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
