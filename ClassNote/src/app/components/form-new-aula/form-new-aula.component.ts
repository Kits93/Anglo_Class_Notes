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
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-new-aula',
  templateUrl: './form-new-aula.component.html',
  styleUrls: ['./form-new-aula.component.scss'],
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
export class FormNewAulaComponent implements OnInit {

  @Input() idAula: any;
  @Input() idUsuario: any;
  @Input() nomeTurma: any;
  @Input() numAula: any;
  @Input() dataAula: any;

  FormData!: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private aulaService: AulaService,
    private disciplinaService: DisciplinaService,
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.FormData = this.formBuilder.group({
      id_turma: ['', Validators.required],
      num_aula: ['', Validators.required],
      id_usuario: ['', Validators.required],
      username: ['', Validators.required],
      id_disciplina: ['', Validators.required],
      nome_disciplina: ['', Validators.required],
      conteudo: ['', Validators.required],
      data_aula: ['', Validators.required]
    });

    this.listDisciplinas();
    this.listUsuarios()
  }

  aulaSelecionada: any = {};
  disciplinaCtrl = new FormControl();
  disciplinas: any[] = [];
  usuarios: any[] = [];
  filteredDisciplinas: Observable<any[]> | undefined;

  listDisciplinas() {
    this.disciplinaService.read().subscribe((dados: any) => {
      if (Array.isArray(dados.disciplinas)) {
        this.disciplinas = dados.disciplinas;
      } else {
        this.disciplinas = [];
      }

      this.filteredDisciplinas = this.disciplinaCtrl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterDisciplinas(value))
      );
    });
  }

  listUsuarios() {
    console.log(this.idUsuario);
    this.usuarioService.readOne(this.idUsuario).subscribe((dados: any) => {
      if (Array.isArray(dados.usuario)) {
        this.usuarios = dados.usuario;
        this.FormData.patchValue({
          id_usuario: this.usuarios[0].id_usuario,
          username: this.usuarios[0].username
        });
      } else {
        this.usuarios = [];
      }
      console.log(this.usuarios);
    });
  }

  private _filterDisciplinas(value: string): any[] {
    console.log(value)
    return this.disciplinas.filter(disciplina => disciplina.nome_disciplina);
  }

  displayFn(disciplina: any): string {
    console.log(disciplina)
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

      // this.aulaService.update(form).subscribe((dados) => {
      //   console.log(dados)

      // })
      this.fecharModal()
    }
  }

  fecharModal() {
    this.modalCtrl.dismiss()
  }
}