import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.page.html',
  styleUrls: ['./home-admin.page.scss'],
})
export class HomeAdminPage implements OnInit {

  exibirMenu: boolean = true; // Inicialmente, o menu será exibido

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.exibirMenu = this.platform.width() <= 768; // Altere 768 para a largura desejada para ocultar o menu em desktop
  }

  username: any

  constructor(private authService: AuthenticationService, private usuarioService: UsuarioService, private router: Router, private route: ActivatedRoute, private platform: Platform) { }

  objLocal: any
  usuario: any = []

  ngOnInit() {
    this.objLocal = (localStorage.getItem('usuario'))
    this.usuario = this.objLocal ? JSON.parse(this.objLocal) : []

    console.log(this.usuario)


    this.onResize(null); // Executa a verificação inicial de tamanho da tela


  }

  selectedItem: any

  setItemMenu(item: any) {
    this.selectedItem = item
  }

  logout() {
    this.authService.logout
    this.router.navigate(['/login'])
  }

  gerarSVG(username: any) {
    const initials = this.usuarioService.generateInitials(username)
    return initials
  }

}
