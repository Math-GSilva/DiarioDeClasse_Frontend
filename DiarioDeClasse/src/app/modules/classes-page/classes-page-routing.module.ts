import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesPageListComponent } from './classes-page-list/classes-page-list.component';
import { ClassesPageViewComponent } from './classes-page-view/classes-page-view.component';

const routes: Routes = [
  {
    path: '', component: ClassesPageListComponent
  },
  {
    path: 'view', component: ClassesPageViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesPageRoutingModule { }
