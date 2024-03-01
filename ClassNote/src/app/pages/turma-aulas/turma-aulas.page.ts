import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AulaService } from 'src/app/services/aula/aula.service';
import { TurmaService } from 'src/app/services/turma/turma.service';
import { ModalController } from '@ionic/angular';

import { FormAulaComponent } from 'src/app/components/form-aula/form-aula.component';

@Component({
  selector: 'app-turma-aulas',
  templateUrl: './turma-aulas.page.html',
  styleUrls: ['./turma-aulas.page.scss'],
})
export class TurmaAulasPage implements OnInit {


  constructor(private modalCtrl: ModalController, private turmaService: TurmaService, private aulaService: AulaService, private route: ActivatedRoute, private router: Router, private location: Location) {
  }

  async openFormModal(id_aula: any, nome_turma: any) {

    console.log(id_aula, nome_turma)

    const modal = await this.modalCtrl.create({
      component: FormAulaComponent,
      componentProps: {
        idAula: id_aula,
        nomeTurma: nome_turma,
      }

    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    console.log('Dados do formulário:', data);
  }

  isLoaded: boolean = false

  id_turma: any
  nome_turma: any
  data_selecionada: any
  aulas: any[] = []

  ensino: any




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

  dataSelected: any

  receiveDataFromChild(data: string) {
    console.log('Dados recebidos do componente filho:', data);
    this.dataSelected = data;

    this.listar_aulas();
  }


  goBack() {
    this.location.back()
  }

  listar_aulas() {
    setTimeout(() => {
      this.isLoaded = false;
    }, 200);

    if (this.id_turma && this.ensino) {
      console.log(this.dataSelected)
      const data = {
        fk_id_turma: this.id_turma,
        data_selecionada: this.dataSelected,
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
        this.isLoaded = true; // Definindo isLoaded como true após receber a resposta
      });
    } else {
      console.error('ID da turma não definido');
    }
    console.log(this.aulas)
  }


  selectAula(id: any, nome_turma: any) {

    if (id) {
      this.openFormModal(id, nome_turma)
    } else {
      alert("olá alteravel")
    }
  }

}
