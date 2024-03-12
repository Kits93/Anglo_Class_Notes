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
import { IonicModule } from '@ionic/angular';

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

  constructor(
    private fb: FormBuilder,
    private disciplinaService: DisciplinaService
  ) {}

  ngOnInit() {
    this.formNewDisciplina = this.fb.group({
      nome_disciplina: ['', Validators.required],
    });
  }

  submitNewDisciplina(form: FormGroup) {
    if (form.valid) {
      console.log(form.value);
      this.disciplinaService.create(form.value).subscribe((dados: any) => {
        console.log(dados);
      });
    }
  }
}
