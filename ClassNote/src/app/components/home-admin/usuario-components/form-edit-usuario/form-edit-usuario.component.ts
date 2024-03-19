import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { IonicModule, ModalController, PopoverController, ToastController } from '@ionic/angular';
import { ComunicationService } from 'src/app/services/comunication/comunication.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { style } from '@angular/animations';

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

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private comunicationService: ComunicationService, private modalCtrl: ModalController, private toastCtrl: ToastController, private popoverCtrl: PopoverController) { }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.form = this.fb.group({
      id_usuario: [this.Usuario.id_usuario],
      username: [this.Usuario.username, Validators.minLength(3)],
      email: [this.Usuario.email, [Validators.required, Validators.email]],
      password: [this.Usuario.password],
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

  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: ChangePasswordComponent,
      componentProps: {
        idUsuario: this.Usuario.id_usuario
      },
      event: ev,
      translucent: true,
      alignment: 'center',
      cssClass: 'custom-popover',
    });
    await popover.present()
  }
  closePopover() {
    this.popoverCtrl.dismiss()
  }

}