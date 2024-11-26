import { Injectable, inject, PLATFORM_ID, Inject  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpClient = inject(HttpClient);
  baseUrl = 'http://localhost:5193';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  login(data: any) {
    return this.httpClient.post(`${this.baseUrl}/api/auth/login`, data)
      .pipe(tap((result) => {
        localStorage.setItem('authUser', JSON.stringify(result));
      }));
  }

  logout() {
    localStorage.removeItem('authUser');
  }

  isLoggedIn() {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('authUser') !== null;
    }
    return false;
  }

  async getRole(): Promise<string | null> {
    const user = localStorage.getItem('authUser');
    if (user) {
      const token = JSON.parse(user).token;
  
      try {
        const isAdmin = await this.httpClient
          .post<boolean>(
            `${this.baseUrl}/api/auth/IsAdmnistrador`,
            {token}, // Pass the token directly
            {
              headers: {
                'Content-Type': 'text/plain', // Ensure content-type is plain text
              },
              responseType: 'json', // Specify the expected response type
            }
          )
          .toPromise();
  
        return isAdmin ? 'admin' : 'user';
      } catch (error) {
        console.error('Error determining role:', error);
        return null;
      }
    }
    return null;
  }
  
  
}
