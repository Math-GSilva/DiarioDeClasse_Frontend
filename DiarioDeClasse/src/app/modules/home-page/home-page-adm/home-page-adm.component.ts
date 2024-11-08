import { Component } from '@angular/core';
import { SidebarComponent } from "../../../components/sidebar/sidebar.component";
import { DashboardListComponent } from "../../../components/dashboard-list/dashboard-list.component";
import { MOCK_SIMPLE_LISTABLE } from '../../../interfaces/mocks/mock-simple-listable';

@Component({
  selector: 'app-home-page-adm',
  standalone: true,
  imports: [SidebarComponent, DashboardListComponent],
  templateUrl: './home-page-adm.component.html',
  styleUrl: './home-page-adm.component.scss'
})
export class HomePageAdmComponent {
  profes_list = [...MOCK_SIMPLE_LISTABLE];
  alunos_list = [...MOCK_SIMPLE_LISTABLE];
  turmas_list = [...MOCK_SIMPLE_LISTABLE];
}
