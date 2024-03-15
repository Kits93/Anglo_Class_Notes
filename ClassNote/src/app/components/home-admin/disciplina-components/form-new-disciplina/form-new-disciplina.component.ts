import { DisciplinaService } from './../../../../services/disciplina/disciplina.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { IonicModule, PopoverController, ToastController } from '@ionic/angular';
import { ComunicationService } from 'src/app/services/comunication/comunication.service';

@Component({
  selector: 'app-form-new-disciplina',
  templateUrl: './form-new-disciplina.component.html',
  styleUrls: ['./form-new-disciplina.component.scss'],
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    IonicModule,
  ],
})
export class FormNewDisciplinaComponent implements OnInit {
  formNewDisciplina!: FormGroup;

  constructor(private fb: FormBuilder, private disciplinaService: DisciplinaService, private comuinicationService: ComunicationService, private popoverCtrl: PopoverController, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.formNewDisciplina = this.fb.group({
      nome_disciplina: ['', Validators.required],
    });
  }

  submitNewDisciplina(form: FormGroup) {
    if (form.valid) {
      console.log(form.value);
      this.disciplinaService.create(form.value).subscribe((dados: any) => {
        if (dados.success === 1) {
          this.presentToast(dados.message, 'checkmark', 'success');

          this.comuinicationService.fecharModal();
          this.back();
        } else {
          this.presentToast(dados.message, 'close', 'danger')
        }
      });
    } else {
      this.presentToast('Formulário de cadastro de disciplina inválido', 'alert-circle', 'danger');
    }
  }

  back() {
    this.popoverCtrl.dismiss()
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
