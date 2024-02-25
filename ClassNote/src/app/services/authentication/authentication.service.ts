import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticated: boolean = false;
  private authToken: string | null = null;

  constructor() {
    this.authToken = localStorage.getItem('token');
    this.isAuthenticated = !!this.authToken;
  }

  login(token: string) {
    this.isAuthenticated = true;
    this.authToken = token;
    localStorage.setItem('token', token)
  }

  logout() {
    this.isAuthenticated = false;
    this.authToken = null;
    localStorage.clear()
  }

  checkAuth(): boolean {
    return this.isAuthenticated;
  }

  getAuthToken(): string | null {
    return this.authToken;
  }
}