import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AaccountStatementComponent } from './aaccount-statement/aaccount-statement.component';

const routes: Routes = [
    {path:'account-statement', component:AaccountStatementComponent,},
]
@NgModule({
    declarations: [
    AaccountStatementComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
      ],
      exports: [RouterModule],
    })
    export class ReportsModule { }