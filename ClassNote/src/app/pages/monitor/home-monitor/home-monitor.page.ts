import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Turma } from 'src/app/models/turmas.model';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { TurmaService } from 'src/app/services/turma/turma.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-home-monitor',
  templateUrl: './home-monitor.page.html',
  styleUrls: ['./home-monitor.page.scss'],
})
export class HomeMonitorPage implements OnInit {

  turmas: any[] = []

  constructor(private loadingCtrl: LoadingController, private authService: AuthenticationService, private router: Router, private route: ActivatedRoute, private turmasService: TurmaService, private usuarioService: UsuarioService) { }

  objLocal: any
  usuario: any = []

  ngOnInit() {

    localStorage.removeItem('turma')

    this.objLocal = (localStorage.getItem('usuario'))
    this.usuario = this.objLocal ? JSON.parse(this.objLocal) : []

    console.log(this.usuario)

    this.listar_turmas()
    this.filtrarTurmas()

  }

  turmasFilter: any[] = []

  ensinoSelected: any = ''

  filtrarTurmas() {
    if (this.ensinoSelected === '') {
      this.turmasFilter = this.turmas
    } else {
      this.turmasFilter = this.turmas.filter(turma => turma.ensino === this.ensinoSelected);
    }
  }


  isLoading: boolean = true
  listar_turmas() {
    setTimeout(() => {
      this.isLoading = false
    }, 200);
    
    this.turmasService.read().subscribe((dados: any) => {
      this.isLoading = true
      console.log(dados)
      this.turmas = dados.turmas
      this.turmasFilter = this.turmas
      if (!dados.success || dados.success != 1) {
        this.turmas = []
      }
    })
  }

  getGradientStyle(ensino: any) {
    if (ensino === 'Ensino Médio') {
      return {
        fill: 'url(#paint0_linear_red)'
      };
    } else if (ensino === 'Ensino Fundamental II') {
      return {
        fill: 'url(#paint0_linear_blue)'
      };
    } else if (ensino === 'Ensino Fundamental I') {
      return {
        fill: 'url(#paint0_linear_yellow)'
      };
    }
    return {
      fill: '#000000'
    };
  }

  defineColor(ensino: any) {
    if (ensino == 'Ensino Médio') {
      return 'card-ensino-M'
    } else if (ensino == 'Ensino Fundamental I') {
      return 'card-ensino-FI'
    } else if (ensino == 'Ensino Fundamental II') {
      return 'card-ensino-FII'
    } else {
      return
    }
  }

  accessTurma(turma: Turma) {
    console.log(turma)
    localStorage.setItem('turma', JSON.stringify(turma))
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
