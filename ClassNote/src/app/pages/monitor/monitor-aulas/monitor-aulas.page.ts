import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AulaService } from 'src/app/services/aula/aula.service';
import { TurmaService } from 'src/app/services/turma/turma.service';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ComunicationService } from 'src/app/services/comunication/comunication.service';
import { FormAulaComponent } from 'src/app/components/teacher/form-aula/form-aula.component';
import { NewFormAulaComponent } from 'src/app/components/teacher/new-form-aula/new-form-aula.component';

@Component({
  selector: 'app-monitor-aulas',
  templateUrl: './monitor-aulas.page.html',
  styleUrls: ['./monitor-aulas.page.scss'],
})
export class MonitorAulasPage implements OnInit {

  private fecharModalSubscription: Subscription;

  constructor(private modalCtrl: ModalController, private turmaService: TurmaService, private aulaService: AulaService, private comunicationService: ComunicationService, private location: Location) {
    this.fecharModalSubscription = this.comunicationService.fecharModal$.subscribe(() => {
      this.listar_aulas();
    });
  }

  isLoaded: boolean = false;

  id_turma: any;
  id_usuario: any;
  nome_turma: any;


  turma: any
  usuario: any
  aulas: any[] = [];
  ensino: any;

  hoje: any;

  ngOnInit(): void {

    this.turma = localStorage.getItem('turma')
    this.turma = JSON.parse(this.turma)

    this.usuario = localStorage.getItem('usuario')
    this.usuario = JSON.parse(this.usuario)

    this.id_turma = this.turma.id_turma
    this.nome_turma = this.turma.nome_turma
    this.ensino = this.turma.ensino
    this.id_usuario = this.usuario.id_usuario

    console.log(this.id_turma, this.id_usuario, this.nome_turma, this.ensino)

  }

  ngOnDestroy() {
    this.fecharModalSubscription.unsubscribe();
  }









  dataSelected: any

  receiveDataFromCalendar(data: string) {
    console.log('Dados recebidos do componente filho:', data);
    this.dataSelected = data;

    this.listar_aulas();
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

}
