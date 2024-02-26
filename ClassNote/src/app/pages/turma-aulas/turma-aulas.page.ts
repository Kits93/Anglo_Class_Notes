import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Platform } from '@ionic/angular';
import { AulaService } from 'src/app/services/aula/aula.service';

@Component({
  selector: 'app-turma-aulas',
  templateUrl: './turma-aulas.page.html',
  styleUrls: ['./turma-aulas.page.scss'],
})
export class TurmaAulasPage implements OnInit {

  turma: any

  aulas: any[] = []

  constructor(private aulaService: AulaService, private route: ActivatedRoute, private router: Router, private location: Location) {
  }

  ngOnInit(): void {
    const navigation = window.history.state;
    if (navigation.turma) {
      this.turma = navigation.turma;
      console.log(this.turma);
    }

    this.listar_aulas()
    
  }

  goBack() {
    this.location.back()
  }

  aula:any = {
    'id_turma': 26,
    'data_selecionada': '2024-02-26'
  }

  // dados

  listar_aulas() {
    this.aulaService.read(this.aula).subscribe((dados: any) => {
      console.log(dados)
      this.aulas = dados.aulas
      if (!dados.success || dados.success != 1) {
        this.aulas = []
      }
    })
  }


  // aulas = [
  //   {
  //     "idAula": 1,
  //     "aula": "1",
  //     "disciplina": "Matemática",
  //     "professor": "João Silva",
  //     "conteudo": "Introdução à álgebra"
  //   },
  //   {
  //     "idAula": 2,
  //     "aula": "2",
  //     "disciplina": "História",
  //     "professor": "Maria Santos",
  //     "conteudo": "Revolução Francesa"
  //   },
  //   {
  //     "idAula": 3,
  //     "aula": "3",
  //     "disciplina": "Ciências",
  //     "professor": "Pedro Oliveira",
  //     "conteudo": "Sistema Solar"
  //   },
  //   {
  //     "idAula": 4,
  //     "aula": "4",
  //     "disciplina": "Português",
  //     "professor": "Ana Sousa",
  //     "conteudo": "Literatura Brasileira"
  //   },
  //   {
  //     "idAula": 5,
  //     "aula": "5",
  //     "disciplina": "Geografia",
  //     "professor": "Fernanda Lima",
  //     "conteudo": "Globalização"
  //   },
  //   {
  //     "idAula": 6,
  //     "aula": "6",
  //     "disciplina": "Inglês",
  //     "professor": "Rafaela Costa",
  //     "conteudo": "Verbos Irregulares"
  //   }
  // ];



  // modal

  isModalOpen = false;


  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
