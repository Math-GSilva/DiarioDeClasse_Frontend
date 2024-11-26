import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageAdmComponent } from './home-page-adm/home-page-adm.component';
import { HomePageUsrComponent } from './home-page-usr/home-page-usr.component';
import { HomeRedirectComponent } from './home-redirect/home-redirect.component';
import { onlyAdminGuard } from '../../services/auth/only-admin.guard';
import { onlyUserGuard } from '../../services/auth/only-user.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'admin',
        component: HomePageAdmComponent,
      },
      {
        path: 'user',
        component: HomePageUsrComponent,
      },
    ]
  },

];

// const routes: Routes = [
//   {
//     path: '',
//     component: HomeRedirectComponent,
//   },
//   {
//     path: 'admin',
//     component: HomePageAdmComponent,
//     //canActivate: [onlyAdminGuard],
//   },
//   {
//     path: 'user',
//     component: HomePageUsrComponent,
//     //canActivate: [onlyUserGuard],
//   },
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
