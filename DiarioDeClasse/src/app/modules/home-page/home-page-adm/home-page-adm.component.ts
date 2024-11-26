import { Component, inject } from '@angular/core';
import { SidebarComponent } from "../../../components/sidebar/sidebar.component";
import { DashboardListComponent } from "../../../components/dashboard-list/dashboard-list.component";
import { MOCK_SIMPLE_LISTABLE } from '../../../interfaces/mocks/mock-simple-listable';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page-adm',
  standalone: true,
  imports: [SidebarComponent, DashboardListComponent, RouterModule],
  templateUrl: './home-page-adm.component.html',
  styleUrl: './home-page-adm.component.scss'
})
export class HomePageAdmComponent {
  router = inject(Router);
  profes_list = [...MOCK_SIMPLE_LISTABLE];
  alunos_list = [...MOCK_SIMPLE_LISTABLE];
  turmas_list = [...MOCK_SIMPLE_LISTABLE];

  goToPage( route: string ){
    this.router.navigate([route]);
  }
}
