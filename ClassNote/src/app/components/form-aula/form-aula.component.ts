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
import { Observable } from 'rxjs';

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
export class FormAulaComponent implements OnInit {

  @Input() idAula: any;
  @Input() nomeTurma: any;

  constructor(private aulaService: AulaService, private disciplinaService: DisciplinaService) { }

  ngOnInit(): void {
    this.listDadosForm();
    this.listDisciplinas();
  }

  formData = {
    id_aula: '',
    num_aula: '',
    id_usuario: '',
    username: '',
    id_disciplina: '',
    nome_disciplina: '',
    conteudo: '',
    nome: ''
  };

  aulaSelecionada: any = {};

  listDadosForm() {
    this.aulaService.readOnce(this.idAula).subscribe((dados: any) => {
      console.log(dados);

      this.aulaSelecionada = dados.aula;

      if (!dados.success || dados.success != 1) {
        this.aulaSelecionada = {};
        console.log(dados.message);
      }

      // this.formData.num_aula = this.aulaSelecionada.num_aula;
      this.formData.id_aula = this.idAula;
      this.formData.num_aula = this.aulaSelecionada.num_aula;
      this.formData.id_usuario = this.aulaSelecionada.fk_id_usuario;
      this.formData.username = this.aulaSelecionada.username;
      this.formData.id_disciplina = this.aulaSelecionada.fk_id_disciplina;
      this.formData.id_disciplina = this.aulaSelecionada.fk_id_disciplina;
      this.formData.conteudo = this.aulaSelecionada.conteudo;

      console.log(this.aulaSelecionada);
      console.log('Valor de id_disciplina:', this.formData.id_disciplina);
    });
  }

  disciplinaCtrl = new FormControl();
  disciplinas: any[] = []
  filteredDisciplinas: Observable<any[]> | undefined;

  listDisciplinas() {
    this.disciplinaService.read().subscribe((dados: any) => {
      this.disciplinas = dados.disciplinas;
      if (!dados.success || dados.success != 1) {
        this.disciplinas = [];
      }

      this.filteredDisciplinas = this.disciplinaCtrl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterDisciplinas(value))
      );
    });
  }

  private _filterDisciplinas(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.disciplinas.filter(disciplina => disciplina.nome_disciplina.toLowerCase().includes(filterValue));
  }

  submitForm() {


    this.formData.id_aula = this.idAula
    this.formData.id_disciplina = this.idAula

    console.log('Dados do formulário:', this.formData);
  }

}
