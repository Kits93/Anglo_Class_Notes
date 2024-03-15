import { Component, OnInit } from '@angular/core';
import { TurmaService } from 'src/app/services/turma/turma.service';
import { Turma } from 'src/app/models/turmas.model';
import { Routes } from '@angular/router';
import { AulasComponent } from '../aulas/aulas.component';
import { Location } from '@angular/common';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { FormNewTurmaComponent } from '../form-new-turma/form-new-turma.component';
import { MatSelect } from '@angular/material/select';
import { Subscription } from 'rxjs';
import { ComunicationService } from 'src/app/services/comunication/comunication.service';

interface Ensino {
  tipo_ensino: string;
  turmas: Turma[];
}

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.scss'],
})
export class TurmasComponent implements OnInit {
  ensinos: Ensino[] = [];

  private fecharModalSubscription: Subscription;

  constructor(private turmaService: TurmaService, private location: Location, private modalCtrl: ModalController, private comunicationService: ComunicationService, private toastCtrl: ToastController, private alertCtrl: AlertController) {
    this.fecharModalSubscription = this.comunicationService.fecharModal$.subscribe(() => {
      this.listarTurmas();
    });
  }

  ngOnInit() {
    localStorage.removeItem('turma')
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

  async openNewTurmaForm() {
    const modal = await this.modalCtrl.create({
      component: FormNewTurmaComponent,
      cssClass: 'turma-custom-modal',
      mode: 'ios',
    });

    modal.onDidDismiss().then(() => {
      console.log('Modal de novo usuário fechado')
    })

    await modal.present();
  }

  accessTurma(turma: Turma) {
    console.log(turma)
    localStorage.setItem('turma', JSON.stringify(turma))
  }


  async deleteTurma(id_turma: any) {
    console.log(id_turma)
    const alert = await this.alertCtrl.create({
      header: 'Atenção!',
      message: 'Tem certeza que deseja excluir esta turma?',
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
            this.turmaService.delete(id_turma).subscribe((dados: any) => {
              if (dados.success === 1) {
                this.presentToast(dados.message, 'checkmark', 'success')
                this.listarTurmas();
              } else if (dados.success === 2) {
                this.presentToast(dados.message, 'close', 'danger')
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
