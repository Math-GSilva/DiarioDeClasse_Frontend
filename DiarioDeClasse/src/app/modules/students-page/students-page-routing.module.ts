import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsPageListComponent } from './students-page-list/students-page-list.component';

const routes: Routes = [
  {
    path: '', component: StudentsPageListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsPageRoutingModule { }
