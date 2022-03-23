import {NgModule} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [SidenavComponent,HeaderComponent,NavbarComponent],
  exports: [SidenavComponent,HeaderComponent,NavbarComponent],
})

export class SharedModule {
}
