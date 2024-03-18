import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CheckMonitorTypeGuard implements CanActivate {
 
  constructor(private authService: AuthenticationService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token'); // Obtém o token do armazenamento local
    if (!token) {
      // Se não houver token, redirecione para a página de login
      this.router.navigate(['/login']);
      return false;
    }

    if (this.authService.isMonitor(token)) {
      console.log("bem vindo, monitor!")
      return true;
    } else {
      this.router.navigate(['/login'])
      console.log("Você não tem permissão para acessar esta página.")
      return false;
    }
  }
}
