import { Component, OnInit } from '@angular/core';
import { TurmaService } from 'src/app/services/turma/turma.service';
import { Turma } from 'src/app/models/turmas.model';
import { Routes } from '@angular/router';
import { AulasComponent } from '../aulas/aulas.component';

interface Ensino {
  tipo_ensino: string;
  turmas: Turma[];
}

const routes: Routes = [
  { path: '../aulas', component: AulasComponent },
];

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.scss'],
})
export class TurmasComponent implements OnInit {
  ensinos: Ensino[] = [];

  constructor(private turmaService: TurmaService) { }

  ngOnInit() {
    this.listarTurmas();
  }

  listarTurmas() {
    this.turmaService.read().subscribe((dados: any) => {
      if (dados && dados.success === 1) {
        this.ensinos = this.agruparPorTipoEnsino(dados.turmas);
      } else {
        this.ensinos = [];
      }
    });
  }

  agruparPorTipoEnsino(turmas: Turma[]): Ensino[] {
    const ensinos: { [key: string]: Ensino } = {};

    turmas.forEach((turma) => {
      if (!ensinos[turma.ensino]) {
        ensinos[turma.ensino] = { tipo_ensino: turma.ensino, turmas: [] };
      }
      ensinos[turma.ensino].turmas.push(turma);
    });

    return Object.values(ensinos);
  }

  getEnsinoClass(ensino: any) {
    switch (ensino) {
      case 'Ensino Fundamental I':
        return 'EFI';
      case 'Ensino Fundamental II':
        return 'EFII';
      case 'Ensino Médio':
        return 'EM';
      default:
        return '';
    }
  }

  getAccordionEnsinoClass(ensino: any) {
    switch (ensino) {
      case 'Ensino Fundamental I':
        return 'accordion-EFI';
      case 'Ensino Fundamental II':
        return 'accordion-EFII';
      case 'Ensino Médio':
        return 'accordion-EM';
      default:
        return '';
    }
  }

  accessTurma(turma: Turma) {
    console.log(turma)
    localStorage.setItem('turma', JSON.stringify(turma))
  }
}
