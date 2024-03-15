import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatOptionModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { IonicModule, ModalController, ToastController } from '@ionic/angular';
import { ComunicationService } from 'src/app/services/comunication/comunication.service';
import { TurmaService } from 'src/app/services/turma/turma.service';

@Component({
  selector: 'app-form-new-turma',
  templateUrl: './form-new-turma.component.html',
  styleUrls: ['./form-new-turma.component.scss'],
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    IonicModule // Adicione IonicModule aos imports
  ],
})
export class FormNewTurmaComponent implements OnInit {


  constructor(private fb: FormBuilder, private modalCtrl: ModalController, private turmaService: TurmaService, private toastCtrl: ToastController, private comunicationService: ComunicationService) { }

  form!: FormGroup
  selected: any

  ngOnInit() {
    this.selected = 'option1'
    this.form = this.fb.group({
      nome_turma: ['', Validators.required],
      ensino: ['', [Validators.required]],
      turno: ['', [Validators.required]],
    });
  }


  createTurma(form: FormGroup) {
    console.log("oi")
    if (form.valid) {
      console.log(form.value)
      this.turmaService.create(form.value).subscribe((dados: any) => {
        if (dados.success === 1) {
          this.presentToast(dados.message, 'checkmark', 'success');

          this.comunicationService.fecharModal();
          this.back();
        } else {
          this.presentToast(dados.message, 'close', 'danger')
        }
      })
    } else {
      this.presentToast('Formulário de cadastro de turma inválido', 'alert-circle', 'danger');
    }
  }

  back() {
    this.modalCtrl.dismiss()
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
