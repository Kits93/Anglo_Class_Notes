import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { IonicModule, PopoverController, ToastController } from '@ionic/angular';
import { Disciplina } from 'src/app/models/disciplina.model';
import { ComunicationService } from 'src/app/services/comunication/comunication.service';
import { DisciplinaService } from 'src/app/services/disciplina/disciplina.service';

@Component({
  selector: 'app-form-edit-disciplina',
  templateUrl: './form-edit-disciplina.component.html',
  styleUrls: ['./form-edit-disciplina.component.scss'],
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
export class FormEditDisciplinaComponent implements OnInit {

  @Input() Disciplina: Disciplina | undefined;
  formEditDisciplina!: FormGroup;

  constructor(private fb: FormBuilder, private disciplinaService: DisciplinaService, private comunicationService: ComunicationService, private popoverCtrl: PopoverController, private toastCtrl: ToastController) { }

  ngOnInit() {
    console.log(this.Disciplina)
    // Verifica se há uma disciplina definida
    if (this.Disciplina) {
      this.formEditDisciplina = this.fb.group({
        id_disciplina: [this.Disciplina.id_disciplina],
        nome_disciplina: [this.Disciplina.nome_disciplina, Validators.required],
      });
    } else {
      console.error('Nenhuma disciplina fornecida para edição.');
    }
  }

  submitEditDisciplina() {
    if (this.formEditDisciplina.valid) {
      const formValue = this.formEditDisciplina.value;
      console.log(formValue)
      this.disciplinaService.update(formValue).subscribe((dados: any) => {
        if (dados.success === 1) {
          this.presentToast(dados.message, 'checkmark', 'success');

          this.comunicationService.fecharModal();
          this.back();
        } else {
          this.presentToast(dados.message, 'close', 'danger')
        }
      });
    } else {
      this.presentToast('Formulário de edição de disciplina inválido', 'alert-circle', 'danger');
    }
  }

  back() {
    this.popoverCtrl.dismiss();
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