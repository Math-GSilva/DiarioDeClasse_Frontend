import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsPageListComponent } from './students-page-list/students-page-list.component';
import { StudentsPageViewComponent } from './students-page-view/students-page-view.component';
import { StudentsPageUsrComponent } from './students-page-usr/students-page-usr.component';

const routes: Routes = [
  {
    path: '', component: StudentsPageListComponent,
  },
  {
    path: 'view', component: StudentsPageViewComponent,
  },
  {
    path: 'user', component: StudentsPageUsrComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsPageRoutingModule { }
