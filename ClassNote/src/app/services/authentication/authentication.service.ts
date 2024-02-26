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

  // verificações e funções de login

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

  // verificações e funções de tipagem de usuário

  getTokenPayload(token: string): any {
    const tokenPayload = token.split('.')[1];
    const decodedTokenPayload = JSON.parse(atob(tokenPayload));
    return decodedTokenPayload;
  }

  getUserRole(token: string): string | null {
    const decodedTokenPayload = this.getTokenPayload(token);
    return decodedTokenPayload ? decodedTokenPayload.role : null;
  }

  isAdmin(token: string): boolean {
    const userRole = this.getUserRole(token);
    return userRole === 'admin';
  }
  isTeacher(token: string): boolean {
    const userRole = this.getUserRole(token);
    return userRole === 'teacher';
  }
}