import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPagePresenceComponent } from './register-page-presence/register-page-presence.component';
import { RegisterPageGradesComponent } from './register-page-grades/register-page-grades.component';

const routes: Routes = [
  {
    path: 'presence', component: RegisterPagePresenceComponent
  },
  {
    path: 'grades', component: RegisterPageGradesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterPageRoutingModule { }
