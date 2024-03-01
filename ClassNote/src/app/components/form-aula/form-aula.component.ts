import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AulaService } from 'src/app/services/aula/aula.service';
import { DisciplinaService } from 'src/app/services/disciplina/disciplina.service';
import { map, startWith } from 'rxjs/operators';

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
    IonicModule,
    ReactiveFormsModule
  ],
})
export class FormAulaComponent {
  @Input() idAula: any;
  @Input() nomeTurma: any;

  form!: FormGroup;
  aulaSelecionada: any = {  }

  disciplinaControl = new FormControl();
  disciplinas: any[] = []

  filteredDisciplinas: any[] = [];

  constructor(private aulaService: AulaService, private disciplinaService: DisciplinaService) { }

  ngOnInit() {

    this.disciplinaControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterDisciplinas(value))
    ).subscribe(filteredDisciplinas => {
      this.filteredDisciplinas = filteredDisciplinas; // Certifique-se de que você está atualizando uma propriedade
    });

    console.log(this.idAula, this.nomeTurma);
    this.form = new FormGroup({
      data: new FormControl(new Date()),
      num_aula: new FormControl(null, Validators.required),
      usuario: new FormControl(null, Validators.required),
      disciplina: new FormControl(null, Validators.required),
      conteudo: new FormControl('')
    });

    this.listDadosForm()
  }

  submitForm() {
    console.log(this.idAula, this.nomeTurma)
    if (this.form.valid) {
      console.log('Dados do formulário:', this.form.value);
      // this.aulaService.update()
    } else {
      // Tratar o caso em que o formulário não é válido
    }
  }

  listDadosForm() {
    this.aulaService.readOnce(this.idAula).subscribe((dados: any) => {
      console.log(dados)

      this.aulaSelecionada = dados.aula
      if (!dados.success || dados.success != 1) {
        this.aulaSelecionada = []
        console.log(dados.message)
      }
      console.log(this.aulaSelecionada)
    })
  }

  listDisciplinas() {
    this.disciplinaService.read().subscribe((dados: any) => {
      this.disciplinas = dados.disciplinas
      if (!dados.success || dados.success != 1) {
        this.disciplinas = []
      }
      console.log(this.disciplinas)
    })
  }

  filterDisciplinas(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.disciplinas.filter(disciplina => disciplina.nome_disciplina.toLowerCase().includes(filterValue));
  }

  selectOption(numAula: number): void {
    this.aulaSelecionada.num_aula = numAula;
  }

}
