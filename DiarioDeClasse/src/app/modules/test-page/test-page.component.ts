import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.scss'
})
export class TestPageComponent {
  authService = inject(AuthService);
  router = inject(Router);
  
  public logout(){
    this.authService.logout();
    this.router.navigate(['']);
  }
}
