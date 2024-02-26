import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-turma-aulas',
  templateUrl: './turma-aulas.page.html',
  styleUrls: ['./turma-aulas.page.scss'],
})
export class TurmaAulasPage implements OnInit {

  isMobile: boolean;


  turma: any

  constructor(private platform: Platform, private route: ActivatedRoute, private router: Router, private location: Location) {
    this.isMobile = this.platform.is('mobile');
  }

  ngOnInit(): void {
    const navigation = window.history.state;
    if (navigation.turma) {
      this.turma = navigation.turma;
      console.log(this.turma);
    }
  }

  goBack() {
    this.location.back()
  }

  // dados


  aulas = [
    {
      "idAula": 1,
      "aula": "1",
      "disciplina": "Matemática",
      "professor": "João Silva",
      "conteudo": "Introdução à álgebra"
    },
    {
      "idAula": 2,
      "aula": "2",
      "disciplina": "História",
      "professor": "Maria Santos",
      "conteudo": "Revolução Francesa"
    },
    {
      "idAula": 3,
      "aula": "3",
      "disciplina": "Ciências",
      "professor": "Pedro Oliveira",
      "conteudo": "Sistema Solar"
    },
    {
      "idAula": 4,
      "aula": "4",
      "disciplina": "Português",
      "professor": "Ana Sousa",
      "conteudo": "Literatura Brasileira"
    },
    {
      "idAula": 5,
      "aula": "5",
      "disciplina": "Geografia",
      "professor": "Fernanda Lima",
      "conteudo": "Globalização"
    },
    {
      "idAula": 6,
      "aula": "6",
      "disciplina": "Inglês",
      "professor": "Rafaela Costa",
      "conteudo": "Verbos Irregulares"
    }
  ];



  // modal

  isModalOpen = false;


  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
