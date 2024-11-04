import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageAdmComponent } from './home-page-adm/home-page-adm.component';
import { HomePageUsrComponent } from './home-page-usr/home-page-usr.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'admin', component: HomePageAdmComponent },
      { path: 'user', component: HomePageUsrComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
