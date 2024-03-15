import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { IonicModule, ModalController, ToastController } from '@ionic/angular';
import { ComunicationService } from 'src/app/services/comunication/comunication.service';
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
    MatRadioModule,
    MatInputModule,
    ReactiveFormsModule,
    IonicModule
  ],
})
export class FormEditUsuarioComponent implements OnInit {

  @Input() Usuario: any;

  form!: FormGroup;
  changePassword: boolean = false;
  password: any;
  role: any;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private comunicationService: ComunicationService, private modalCtrl: ModalController, private toastCtrl: ToastController) { }

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
    this.role = this.form.value.role;
  }

  UpdateUser() {
    if (this.form.valid) {
      const formEdit = this.form.value;
      console.log(formEdit);
      this.usuarioService.update(formEdit).subscribe((dados: any) => {
        if (dados.success === 1) {
          this.presentToast(dados.message, 'checkmark', 'success');

          this.comunicationService.fecharModal();
          this.back();
        } else {
          this.presentToast(dados.message, 'close', 'danger');
        }
      });

    } else {
      this.presentToast('Formulário de edição de usuário inválido', 'alert-circle', 'danger');
    }
  }

  gerarSVG(username: any) {
    return this.usuarioService.generateInitials(username);
  }

  back() {
    this.modalCtrl.dismiss();
  }

  toggleChangePassword() {
    this.changePassword = !this.changePassword;
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

}