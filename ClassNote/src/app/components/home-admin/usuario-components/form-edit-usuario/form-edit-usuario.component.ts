import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IonicModule } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-form-edit-usuario',
  templateUrl: './form-edit-usuario.component.html',
  styleUrls: ['./form-edit-usuario.component.scss'],
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    IonicModule // Adicione IonicModule aos imports
  ],
})
export class FormEditUsuarioComponent implements OnInit {

  @Input() Usuario: any

  form!: FormGroup;
  changePassword: boolean = false;
  password: any

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: [this.Usuario.username, Validators.minLength(3)],
      email: [this.Usuario.username, [Validators.required, Validators.email]],
      password: [this.Usuario.password, Validators.minLength(8)],
      new: ['', Validators.minLength(8)],
      confirmNewPassword: ['', Validators.minLength(8)]
    });

    this.password = this.form.value.password
  }

  createUser(form: any) {
    if (form.valid) {
      console.log(this.form.value);
    } else {
      console.log('Formulário inválido');
    }
  }

  gerarSVG(username: any) {
    const initials = this.usuarioService.generateInitials(username)
    return initials
  }

  toggleChangePassword() {
    this.changePassword = !this.changePassword; // Inverte o estado de changePassword
  }

}
