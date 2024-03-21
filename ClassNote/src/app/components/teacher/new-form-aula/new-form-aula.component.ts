import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IonicModule, ModalController, ToastController } from '@ionic/angular';
import { Observable, startWith, map } from 'rxjs';
import { AulaService } from 'src/app/services/aula/aula.service';
import { ComunicationService } from 'src/app/services/comunication/comunication.service';
import { DisciplinaService } from 'src/app/services/disciplina/disciplina.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-new-form-aula',
  templateUrl: './new-form-aula.component.html',
  styleUrls: ['./new-form-aula.component.scss'],
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
export class NewFormAulaComponent implements OnInit {
  @Input() numAula: any;
  @Input() idTurma: any;
  @Input() nomeTurma: any;
  @Input() dataAula: any;

  FormData!: FormGroup;

  constructor(private modalCtrl: ModalController, private aulaService: AulaService, private usuarioService: UsuarioService, private disciplinaService: DisciplinaService, private formBuilder: FormBuilder, private comunicationService: ComunicationService, private toastCtrl: ToastController
  ) { }

  objLocal: any
  usuario: any = []

  ngOnInit() {
    this.objLocal = (localStorage.getItem('usuario'))
    this.usuario = this.objLocal ? JSON.parse(this.objLocal) : []

    console.log(this.usuario)

    this.FormData = this.formBuilder.group({
      num_aula: ['', Validators.required],
      id_turma: ['', Validators.required],
      id_usuario: ['', Validators.required],
      username: ['', Validators.required],
      id_disciplina: ['', Validators.required],
      nome_disciplina: ['', Validators.required],
      conteudo: ['', Validators.required],
      data_aula: ['', Validators.required]
    });



    this.FormData.patchValue({
      num_aula: this.numAula,
      id_turma: this.idTurma,
      id_usuario: this.usuario.id_usuario,
      username: this.usuario.username,
      data_aula: this.dataAula
    })

    // this.listDadosForm();
    this.listDisciplinas();
    this.listUsuarios();
  }

  aulaSelecionada: any = {};

  disciplinas: any[] = [];
  disciplinaCtrl = new FormControl();
  filteredDisciplinas: Observable<any[]> | undefined;

  usuarios: any[] = [];
  usuarioCtrl = new FormControl();
  filteredUsuarios: Observable<any[]> | undefined;

  listUsuarios() {
    this.usuarioService.readProf().subscribe((dados: any) => {
      this.usuarios = dados.usuarios;
      if (!dados.success || dados.success != 1) {
        this.usuarios = [];
      }

      this.filteredUsuarios = this.usuarioCtrl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterUsuarios(value))
      );
    });
  }

  private _filterUsuarios(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.usuarios.filter(usuario => usuario.username.toLowerCase().includes(filterValue));
  }

  displayFnUser(usuario: any): string {
    return usuario && usuario.username ? usuario.username : '';
  }

  onUsuarioSelected(event: MatAutocompleteSelectedEvent) {
    const selectedUsuario = event.option.value;
    console.log(selectedUsuario);

    this.FormData.patchValue({
      id_usuario: selectedUsuario.id_usuario,
      username: selectedUsuario.username,
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

  displayFnDisc(disciplina: any): string {
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

      this.aulaService.create(form.value).subscribe((dados: any) => {
        if (dados.success === 1) {
          this.presentToast(dados.message, 'checkmark', 'success');

          this.comunicationService.fecharModal();
          this.back();
        } else {
          this.presentToast(dados.message, 'close', 'danger')
        }
      })
    } else {
      this.presentToast('Formulário de cadastro de aula inválido', 'alert-circle', 'danger');
    }
  }

  back() {
    this.modalCtrl.dismiss()
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

  goBack(){
    this.modalCtrl.dismiss()
  }
}
