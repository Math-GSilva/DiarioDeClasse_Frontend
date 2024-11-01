import { Component } from '@angular/core';
import { SidebarComponent } from "../../../components/sidebar/sidebar.component";

@Component({
  selector: 'app-home-page-adm',
  standalone: true,
  imports: [ SidebarComponent ],
  templateUrl: './home-page-adm.component.html',
  styleUrl: './home-page-adm.component.scss'
})
export class HomePageAdmComponent {

}
