import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TurmaService } from 'src/app/services/turma/turma.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.page.html',
  styleUrls: ['./turma.page.scss'],
})
export class TurmaPage implements OnInit {

  turmas: any[] = []

  constructor(private authService: AuthenticationService, private router: Router, private route: ActivatedRoute, private turmasService: TurmaService) { }

  username: any

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.username = params['username'].toUpperCase();
      console.log(this.username)
    });

    this.filtrarTurmas()
    this.listar_turmas()
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

  listar_turmas() {
    this.turmasService.read().subscribe((dados: any) => {
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

  acessarTurma(id_turma: any) {
    console.log(id_turma);
    this.router.navigate(['../turma-aulas'], { state: { id_turma: id_turma } });
  }

  logout() {
    this.authService.logout
    this.router.navigate(['/login'])
  }
}
