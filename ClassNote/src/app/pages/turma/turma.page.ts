import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TurmaService } from 'src/app/services/turma/turma.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.page.html',
  styleUrls: ['./turma.page.scss'],
})
export class TurmaPage implements OnInit {

  turmas: any[] = []

  constructor(private loadingCtrl: LoadingController, private authService: AuthenticationService, private router: Router, private route: ActivatedRoute, private turmasService: TurmaService) { }

  id_usuario: any
  username: any

  ngOnInit() {

    if (window.history.state.id_usuario) {
      this.id_usuario = window.history.state.id_usuario;
      this.username = window.history.state.username;
      console.log(this.id_usuario);
      console.log(this.username);
    } else {
      console.error('ID da turma não definido');
    }

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

  acessarTurma(id_turma: any, ensino: any) {
    console.log(id_turma);
    console.log(ensino);
    this.router.navigate(['../turma-aulas'], { state: { id_turma: id_turma, ensino: ensino, id_usuario: this.id_usuario } });
  }

  logout() {
    this.authService.logout
    this.router.navigate(['/login'])
  }

  // async showLoading() {
  //   const loading = await this.loadingCtrl.create({
  //     message: 'Dismissing after 3 seconds...',
  //     duration: 3000,
  //   });

  //   loading.present();
  // }
}
