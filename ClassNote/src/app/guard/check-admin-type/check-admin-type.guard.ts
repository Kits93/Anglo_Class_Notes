import { AuthenticationService } from '../../services/authentication/authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckAdminTypeGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token'); // Obtém o token do armazenamento local
    if (!token) {
      // Se não houver token, redirecione para a página de login
      this.router.navigate(['/login']);
      return false;
    }

    if (this.authService.isAdmin(token)) {
      console.log("bem vindo, admin!")
      return true;
    } else {
      this.router.navigate(['/login'])
      console.log("Você não tem permissão para acessar esta página.")
      return false;
    }
  }
}
