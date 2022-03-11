import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [



  {path:'', component: HomeComponent,},
  {path:'header', component:HeaderComponent,},
  {path:'nav', component:NavbarComponent,},
  {path:'sidenav', component: SidenavComponent,},
  {path:'footer', component: FooterComponent,},

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
