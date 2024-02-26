import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TurmaService } from 'src/app/services/turma/turma.service';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.page.html',
  styleUrls: ['./turma.page.scss'],
})
export class TurmaPage implements OnInit {

  turmas: any[] = []

  constructor(private router: Router, private route:ActivatedRoute, private turmasService: TurmaService) { }

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

  acessarTurma(turma: any) {
    console.log(turma);
    this.router.navigate(['../turma-aulas'], { state: { turma: turma } });
  }

  logout() {
    localStorage.clear()
    this.router.navigate(['/login'])
  }
}
