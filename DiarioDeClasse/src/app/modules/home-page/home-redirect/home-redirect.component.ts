import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-home-redirect',
  standalone: true,
  imports: [],
  templateUrl: './home-redirect.component.html',
  styleUrls: ['./home-redirect.component.scss']
})
export class HomeRedirectComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  async ngOnInit() {
    console.log("ngOnInit");
    if (this.authService.isLoggedIn()) {
      console.log("isLoggedIn");

      try {
        const role = await this.authService.getRole();
        console.log(role);

        if (role === 'admin') {
          this.router.navigate(['home/admin']);
        } else if (role === 'user') {
          this.router.navigate(['home/user']);
        } else {
          this.router.navigate(['login']);
        }
      } catch (error) {
        console.error("Error determining role:", error);
        this.router.navigate(['login']);
      }
    } else {
      this.router.navigate(['login']);
    }
  }
}
