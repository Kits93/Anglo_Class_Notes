import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-side-menu-monitor',
  templateUrl: './side-menu-monitor.component.html',
  styleUrls: ['./side-menu-monitor.component.scss'],
})
export class SideMenuMonitorComponent  implements OnInit {


  exibirMenu: boolean = true; // Inicialmente, o menu será exibido

  constructor(private authService: AuthenticationService, private usuarioService: UsuarioService, private router: Router, private menuCtrl: MenuController) { }

  objLocal: any
  usuario: any = []

  ngOnInit() {
    this.objLocal = (localStorage.getItem('usuario'))
    this.usuario = this.objLocal ? JSON.parse(this.objLocal) : []

    console.log(this.usuario)

  }

  logout() {
    this.fecharMenu()
    this.authService.logout
    this.router.navigate(['/login'])
  }

  gerarSVG(username: any) {
    const initials = this.usuarioService.generateInitials(username)
    return initials
  }

  fecharMenu() {
    this.menuCtrl.close()
  }

}
