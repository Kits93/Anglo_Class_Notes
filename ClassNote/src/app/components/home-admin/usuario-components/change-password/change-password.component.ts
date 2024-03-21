import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { IonicModule, PopoverController, ToastController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
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
export class ChangePasswordComponent implements OnInit {

  @Input() idUsuario: any;

  form!: FormGroup;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private popoverCtrl: PopoverController, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.form = this.fb.group({
      id_usuario: this.idUsuario,
      newPassword: ['', Validators.minLength(6)],
      confirmNewPassword: ['', Validators.minLength(6)],
    })
  }

  checkPasswords(group: FormGroup) {
    const newPassword = group.controls['newPassword'].value;
    const confirmNewPassword = group.controls['confirmNewPassword'].value;

    return newPassword === confirmNewPassword ? null : { notSame: true };
  }

  changePassword() {
    console.log(this.form.value)
    if (this.form.valid) {
      this.usuarioService.changePassword(this.form.value).subscribe((dados: any) => {
        if (dados.success === 1) {
          this.presentToast(dados.message, 'checkmark', 'success');
          this.popoverCtrl.dismiss()
        } else if (dados.success === 2) {
          this.presentToast(dados.message, 'alert-circle', 'danger');
        } else if (dados.success === 3) {
          this.presentToast(dados.message, 'alert-circle', 'danger');
        } else {
          this.presentToast(dados.message, 'close', 'danger');
        }
      });

    } else {
      this.presentToast('Formulário de alteração de senha inválido', 'alert-circle', 'danger');
    }
  }

  // implementar ion-toast com mensagem de alterada com sucesso ou falha na alteração de senha ou senhas não batem.
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
