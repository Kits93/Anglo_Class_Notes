import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AulaService } from 'src/app/services/aula/aula.service';
import { TurmaService } from 'src/app/services/turma/turma.service';

@Component({
  selector: 'app-turma-aulas',
  templateUrl: './turma-aulas.page.html',
  styleUrls: ['./turma-aulas.page.scss'],
})
export class TurmaAulasPage implements OnInit {

  id_turma: any
  nome_turma: any
  data_selecionada: any
  aulas: any[] = []

  ensino: any

  constructor(private turmaService: TurmaService, private aulaService: AulaService, private route: ActivatedRoute, private router: Router, private location: Location) {
  }


  ngOnInit(): void {

    if (window.history.state.id_turma) {
      this.id_turma = window.history.state.id_turma;
      this.ensino = window.history.state.ensino;
      console.log(this.id_turma);
      console.log(this.ensino);
    } else {
      console.error('ID da turma não definido');
    }



    this.data_selecionada = "2024-02-26";
    this.listar_aulas();
  }

  goBack() {
    this.location.back()
  }

  listar_aulas() {

    if (this.id_turma && this.ensino) {
      const data = {
        fk_id_turma: this.id_turma,
        data_selecionada: '2024-02-26',
        ensino: this.ensino
      };

      this.turmaService.readOne(data).subscribe((dados: any) => {
        console.log(dados)
        this.nome_turma = dados.turmas[0].nome_turma
      })

      this.aulaService.read(data).subscribe((dados: any) => {
        console.log(this.id_turma)
        console.log(dados);
        this.aulas = dados.aulas
        if (!dados.success || dados.success != 1) {
          this.aulas = [];
        }
      });
    } else {
      console.error('ID da turma não definido');
    }
    console.log(this.aulas)
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
