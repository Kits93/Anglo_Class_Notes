import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {


  exibirMenu: boolean = true; // Inicialmente, o menu será exibido

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.exibirMenu = this.platform.width() <= 768; // Altere 768 para a largura desejada para ocultar o menu em desktop
  }

  constructor(private platform: Platform, private authService: AuthenticationService, private usuarioService: UsuarioService, private router: Router, private menuCtrl: MenuController) { }

  objLocal: any
  usuario: any = []

  ngOnInit() {
    this.objLocal = (localStorage.getItem('usuario'))
    this.usuario = this.objLocal ? JSON.parse(this.objLocal) : []

    console.log(this.usuario)

    this.onResize(null);

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

  fecharMenu(){
    this.menuCtrl.close()
  }

}
