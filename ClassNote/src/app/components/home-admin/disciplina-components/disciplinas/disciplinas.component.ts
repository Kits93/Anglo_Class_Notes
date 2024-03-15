import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AlertController, PopoverController, ToastController } from '@ionic/angular';
import { Disciplina } from 'src/app/models/disciplina.model';
import { DisciplinaService } from 'src/app/services/disciplina/disciplina.service';
import { FormNewDisciplinaComponent } from '../form-new-disciplina/form-new-disciplina.component';
import { ComunicationService } from 'src/app/services/comunication/comunication.service';
import { Subscription } from 'rxjs';
import { FormEditDisciplinaComponent } from '../form-edit-disciplina/form-edit-disciplina.component';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.scss'],
})
export class DisciplinasComponent implements OnInit, OnDestroy {
  dataSource!: MatTableDataSource<Disciplina>;
  displayedColumns: string[] = ['Disciplina', 'edit_create', 'delete'];
  disciplinasListadas: Disciplina[] = [];

  private fecharModalSubscription: Subscription;

  constructor(private disciplinaService: DisciplinaService, private comunicationService: ComunicationService, private popoverCtrl: PopoverController, private alertCtrl: AlertController, private toastCtrl: ToastController
  ) {
    this.fecharModalSubscription = this.comunicationService.fecharModal$.subscribe(() => {
      this.listarDisciplinas();
    });
  }

  ngOnDestroy() {
    this.fecharModalSubscription.unsubscribe();
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Disciplina>([]);
    this.listarDisciplinas();
  }

  listarDisciplinas() {
    this.disciplinaService.read().subscribe((dados: any) => {
      if (dados && dados.success === 1 && dados.disciplinas) {
        this.disciplinasListadas = dados.disciplinas;
        this.dataSource.data = this.disciplinasListadas;
      } else {
        this.disciplinasListadas = [];
        this.dataSource.data = [];
        console.error('Erro ao carregar Disciplinas.');
      }
    });
  }

  async openNewFormPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: FormNewDisciplinaComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  async openEditFormPopover(ev: any, disciplina: Disciplina) {
    console.log(disciplina)
    const popover = await this.popoverCtrl.create({
      component: FormEditDisciplinaComponent,
      componentProps: {
        Disciplina: disciplina
      },
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  async excluirDisciplina(id_disciplina: any) {
    console.log(id_disciplina)
    const alert = await this.alertCtrl.create({
      header: 'Atenção!',
      message: 'Tem certeza que deseja excluir esta disciplina?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Exclusão cancelada');
          }
        },
        {
          text: 'Excluir',
          handler: () => {
            this.disciplinaService.delete(id_disciplina).subscribe((dados: any) => {
              if (dados.success == 1) {
                this.presentToast(dados.message, 'success', 'checkmark')
                this.listarDisciplinas();
              } else {
                this.presentToast(dados.message, 'danger', 'close')
              }

            });
          }
        }
      ]
    });

    await alert.present();
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
}