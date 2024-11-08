import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersPageListComponent } from './teachers-page-list/teachers-page-list.component';

const routes: Routes = [
  {
    path: '', component: TeachersPageListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersPageRoutingModule { }
