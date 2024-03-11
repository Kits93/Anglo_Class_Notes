import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioButton } from '@angular/material/radio';
import { IonicModule, ModalController } from '@ionic/angular';
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
    MatRadioButton,
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

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.form = this.fb.group({
      id_usuario: [this.Usuario.id_usuario],
      username: [this.Usuario.username, Validators.minLength(3)],
      email: [this.Usuario.email, [Validators.required, Validators.email]],
      password: [this.Usuario.password],
      newPassword: ['', Validators.minLength(8)],
      confirmNewPassword: ['', Validators.minLength(8)],
      role: [this.Usuario.role, Validators.required]
    });
    this.password = this.form.value.password;
  }


  UpdateUser(form: any) {
    if (form.valid) {
      console.log(this.form.value);
      this.usuarioService.update(form);
    } else {
      console.log('Formulário inválido');
    }
  }

  gerarSVG(username: any) {
    const initials = this.usuarioService.generateInitials(username)
    return initials
  }

  back() {
    this.modalCtrl.dismiss()
  }

  toggleChangePassword() {
    this.changePassword = !this.changePassword; // Inverte o estado de changePassword
  }

}
