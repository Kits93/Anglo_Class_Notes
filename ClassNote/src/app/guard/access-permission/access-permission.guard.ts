import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AccessPermissionGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) { }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.checkAuth()) {
      return true;
    } else {
      // Se o usuário não estiver autenticado, redirecione-o para a página de login
      this.router.navigate(['/login']);
      return false;
    }
  }
}