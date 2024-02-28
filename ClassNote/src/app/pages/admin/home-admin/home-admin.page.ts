import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';


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

  constructor(private authService: AuthenticationService, private router: Router, private route: ActivatedRoute, private platform: Platform) { }

  ngOnInit(): void {
    this.onResize(null); // Executa a verificação inicial de tamanho da tela

    this.route.params.subscribe(params => {
      this.username = params['username'].toUpperCase();
      console.log(this.username)
    });
  }

  selectedItem: any

  setItemMenu(item: any){
    this.selectedItem = item
  }

  logout() {
    this.authService.logout
    this.router.navigate(['/login'])
  }

}
