import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ ReactiveFormsModule, RouterModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  authService = inject(AuthService);
  router = inject(Router);

  hide_password: boolean = true;

  protected loginForm = new FormGroup({
    Username: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required])
  })

  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value)
      .subscribe((data: any) => {
        if(this.authService.isLoggedIn()){
          console.log("login succedido!")
          this.router.navigate(['/test']);
        }
        console.log(data);
      });
    }
  }

  toggleShowPassword(){
    this.hide_password = !this.hide_password;
  }
}
