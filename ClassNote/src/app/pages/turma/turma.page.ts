import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TurmaService } from 'src/app/services/turma/turma.service';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.page.html',
  styleUrls: ['./turma.page.scss'],
})
export class TurmaPage implements OnInit {

  turmas: any[] = []

  constructor(private router: Router, private turmasService: TurmaService) { }

  ngOnInit() {
    this.listar_turmas()
  }

  listar_turmas() {
    this.turmasService.read().subscribe((dados: any) => {
      console.log(dados)
      this.turmas = dados.turmas
      if (!dados.success || dados.success != 1) {
        this.turmas = []
      }
    })
  }

  items = [
    { "turma": "3º ano D", "ensino": "Ensino Fundamental I" },
    { "turma": "4º ano A", "ensino": "Ensino Fundamental I" },
    { "turma": "7º ano B", "ensino": "Ensino Fundamental II" },
    { "turma": "1º ano A", "ensino": "Ensino Médio" },
    { "turma": "2º ano B", "ensino": "Ensino Médio" },
    { "turma": "3º ano C", "ensino": "Ensino Médio" },
    { "turma": "1º ano B", "ensino": "Ensino Fundamental I" },
    { "turma": "2º ano A", "ensino": "Ensino Fundamental II" },
    { "turma": "4º ano B", "ensino": "Ensino Fundamental I" },
    { "turma": "5º ano C", "ensino": "Ensino Fundamental I" },
    { "turma": "6º ano A", "ensino": "Ensino Fundamental II" },
    { "turma": "9º ano D", "ensino": "Ensino Fundamental II" }
  ]

  acessarTurma(turma: any) {
    console.log(turma);
    this.router.navigate(['../turma-aulas'], { state: { turma: turma } });
  }
}
