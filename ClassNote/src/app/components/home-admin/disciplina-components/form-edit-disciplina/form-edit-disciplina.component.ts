import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { IonicModule, PopoverController } from '@ionic/angular';
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

  constructor(private fb: FormBuilder, private disciplinaService: DisciplinaService, private comunicationService: ComunicationService, private popoverCtrl: PopoverController) { }

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
        console.log(dados);
        // Feche o popover após a atualização
        this.comunicationService.fecharModal();
        this.back();
      });
    } else {
      console.log('Formulário inválido');
    }
  }

  back() {
    this.popoverCtrl.dismiss();
  }
}