import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-form-aula',
  templateUrl: './form-aula.component.html',
  styleUrls: ['./form-aula.component.scss'],
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    CommonModule,
    FormsModule,
    IonicModule
  ],
})
export class FormAulaComponent {
  @Input() nomeTurma: any; // Defina o tipo de nomeTurma como string

  form: FormGroup;
  disciplinas: string[] = ['Matemática', 'Português', 'História']; // Lista de disciplinas

  constructor() {
    this.form = new FormGroup({
      data: new FormControl(new Date()), // Define a data inicial
      num_aula: new FormControl(null, Validators.required),
      usuario: new FormControl(null, Validators.required),
      disciplina: new FormControl(null, Validators.required),
      conteudo: new FormControl('')
    });
  }

  submitForm() {
    if (this.form.valid) {
      // Lógica para enviar os dados do formulário para o servidor
      console.log('Dados do formulário:', this.form.value);
      // Aqui você pode chamar um serviço para enviar os dados para o backend
    } else {
      // Tratar o formulário inválido, se necessário
    }
  }
}
