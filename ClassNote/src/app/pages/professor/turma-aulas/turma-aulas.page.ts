import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AulaService } from 'src/app/services/aula/aula.service';
import { TurmaService } from 'src/app/services/turma/turma.service';
import { ModalController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ComunicationService } from 'src/app/services/comunication/comunication.service';
import { FormAulaComponent } from 'src/app/components/teacher/form-aula/form-aula.component';
import { NewFormAulaComponent } from 'src/app/components/teacher/new-form-aula/new-form-aula.component';

@Component({
  selector: 'app-turma-aulas',
  templateUrl: './turma-aulas.page.html',
  styleUrls: ['./turma-aulas.page.scss'],
})
export class TurmaAulasPage implements OnInit {

  private fecharModalSubscription: Subscription;

  constructor(private modalCtrl: ModalController, private turmaService: TurmaService, private aulaService: AulaService, private comunicationService: ComunicationService, private location: Location, private toastCtrl: ToastController) {
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

  async openFormModal(id_aula: any, nome_turma: any, id_usuario: any) {

    if (this.usuario.id_usuario === id_usuario) {
      const modal = await this.modalCtrl.create({
        component: FormAulaComponent,
        componentProps: {
          idAula: id_aula,
          nomeTurma: nome_turma,
        },
        mode: 'ios'

      });
      await modal.present();

      const { data } = await modal.onDidDismiss();
      console.log('Dados do formulário:', data);
    } else {
      this.presentToast('Apenas o professor relacionado a aula e o administrador do sistema podem alterar esta aula!', 'warning-outline', 'warning')
    }

  }

  async presentToast(message: any, icon: any, color: any) {
    const toast = await this.toastCtrl.create({
      icon: icon,
      message: message,
      duration: 3000,
      position: 'bottom',
      color: color,
    });

    await toast.present();
  }


  async openNewFormModal(num_aula: any, id_turma: any, nome_turma: any, data_aula: any) {

    const modal = await this.modalCtrl.create({
      component: NewFormAulaComponent,
      componentProps: {
        numAula: num_aula,
        idTurma: id_turma,
        nomeTurma: nome_turma,
        dataAula: data_aula,
      },
      mode: 'ios'

    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    console.log('Dados do formulário:', data);
  }


  dataSelected: any

  receiveDataFromCalendar(data: string) {
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


  selectAula(id: any, num_aula: any, nome_turma: any, fk_id_usuario: any) {

    if (id) {
      this.openFormModal(id, nome_turma, fk_id_usuario)
    } else {
      this.openNewFormModal(num_aula, this.id_turma, nome_turma, this.dataSelected)
    }
  }

}
