import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';

import { AulaService } from 'src/app/services/aula/aula.service';
import { DisciplinaService } from 'src/app/services/disciplina/disciplina.service';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ComunicationService } from 'src/app/services/comunication/comunication.service';

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

  FormData!: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private aulaService: AulaService,
    private disciplinaService: DisciplinaService,
    private formBuilder: FormBuilder,
    private comunicationService: ComunicationService
  ) { }

  ngOnInit(): void {
    this.FormData = this.formBuilder.group({
      id_aula: ['', Validators.required],
      num_aula: ['', Validators.required],
      id_usuario: ['', Validators.required],
      username: ['', Validators.required],
      id_disciplina: ['', Validators.required],
      nome_disciplina: ['', Validators.required],
      conteudo: ['', Validators.required]
    });

    this.listDadosForm();
    this.listDisciplinas();
  }

  aulaSelecionada: any = {};
  disciplinaCtrl = new FormControl();
  disciplinas: any[] = [];
  filteredDisciplinas: Observable<any[]> | undefined;

  listDadosForm() {
    this.aulaService.readOnce(this.idAula).subscribe((dados: any) => {
      console.log(dados);

      this.aulaSelecionada = dados.aula;

      if (!dados.success || dados.success != 1) {
        this.aulaSelecionada = {};
        console.log(dados.message);
      }

      this.FormData.patchValue({
        id_aula: this.idAula,
        num_aula: this.aulaSelecionada.num_aula,
        id_usuario: this.aulaSelecionada.fk_id_usuario,
        username: this.aulaSelecionada.username,
        id_disciplina: this.aulaSelecionada.fk_id_disciplina,
        nome_disciplina: this.aulaSelecionada.nome_disciplina,
        conteudo: this.aulaSelecionada.conteudo,
      });

      console.log(this.aulaSelecionada);
      console.log('Valor de FormData:', this.FormData.value);
    });
  }

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

  displayFn(disciplina: any): string {
    return disciplina && disciplina.nome_disciplina ? disciplina.nome_disciplina : '';
  }

  onDisciplinaSelected(event: MatAutocompleteSelectedEvent) {
    const selectedDisciplina = event.option.value;
    console.log(selectedDisciplina)

    this.FormData.patchValue({
      id_disciplina: selectedDisciplina.id_disciplina,
      nome_disciplina: selectedDisciplina.nome_disciplina,
    });
  }

  submitForm(form: any) {
    console.log('Dados do formulário:', form.value);
    if (form.valid) {

      this.aulaService.update(form.value).subscribe((dados) => {
        console.log(dados)
      })
      this.comunicationService.fecharModal();
      this.back()
    }
  }

  back() {
    this.modalCtrl.dismiss()
  }
}