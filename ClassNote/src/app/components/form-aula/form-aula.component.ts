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

  disciplinas: any[] = []

  filteredDisciplinas: any[] = [];

  constructor(private aulaService: AulaService, private disciplinaService: DisciplinaService) { }

  ngOnInit() {
    console.log(this.idAula, this.nomeTurma);
    this.createFormEdit(this.idAula);
    this.listDadosForm();
    this.listDisciplinas(); // Chama o método para carregar as disciplinas
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

  controlDisciplina: any= ''

  digitou(e: any) {
    this.controlDisciplina = (e.target as HTMLInputElement).value;
    this.filteredDisciplinas = this._filter(this.controlDisciplina);
    console.log(this.filteredDisciplinas)
  }
  
  private _filter(nome_disciplina: string): any {
    const filterValue = nome_disciplina.toLowerCase();
    return this.disciplinas.filter(option => option.nome_disciplina.toLowerCase().includes(filterValue));
  }
  

  selectOption(numAula: number): void {
    this.aulaSelecionada.num_aula = numAula;
  }



  FormAula!: FormGroup

  createFormEdit(id_aula: any) {
		this.FormAula = new FormGroup({
			id_aula: new FormControl(id_aula),
			// disciplina: new FormControl(cliente.cliente_nome, Validators.compose([
			// 	Validators.maxLength(10),
			// 	Validators.required])),
			// conteudo: new FormControl(cliente.cliente_tel, Validators.compose([
			// 	Validators.maxLength(255),
			// 	Validators.minLength(3),
			// 	Validators.required])),
		});
	}

  setDisciplina(id_disciplina: any){

  }

}
