import { HomeAdminPage } from './../admin/home-admin/home-admin.page';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login/login.service';

import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { ChangePasswordComponent } from 'src/app/components/change-password/change-password.component';
import { state } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  popoverController: any;

  constructor(private authService: AuthenticationService, private router: Router, private http: HttpClient, private toastController: ToastController, private loginService: LoginService) { }

  ngOnInit() {
    localStorage.clear()
    this.createFormAdd();
  }

  UserForm!: FormGroup;

  get username() {
    return this.UserForm.get('username')!;
  }

  createFormAdd() {
    this.UserForm = new FormGroup({
      username: new FormControl('', Validators.compose([
        Validators.maxLength(70),
        Validators.minLength(3),
        Validators.required])),
      password: new FormControl('', Validators.compose([
        Validators.required]))
    });
  }

  validarLogin(form: any) {
    this.loginService.loginVerify(form).subscribe((data: any) => {
      console.log(data);
      if (data.success == '1') {
        this.loginService.autorizarJwt(data.token);
        localStorage.setItem('usuario', JSON.stringify(data.usuario))
        this.presentToast('ok');

        this.authService.login(data.token)

        if (this.authService.isAdmin(data.token)) {
          console.log(this.UserForm.value.username)
          this.router.navigate(['/home-admin']);
        } else if (this.authService.isTeacher(data.token)) {
          console.log(this.UserForm.value.username)
          this.router.navigate(['/turma']);
        } else {
          this.presentToast('error');
          console.log('Formulário inválido!');
        }
      } else {
        this.presentToast('error');
        console.log('Formulário inválido!');
      }
    });
  }

  // toast

  async presentToast(state: 'ok' | 'error') {

    let toast: any;

    if (state == 'ok') {
      toast = await this.toastController.create({
        message: `Dados corretos! bem vindo, ${this.UserForm.value.username}`,
        duration: 2500,
        color: 'success',
        position: 'bottom',
      });
    } else {
      toast = await this.toastController.create({
        message: 'Falha no login, tente novamente.',
        duration: 2500,
        color: 'danger',
        position: 'bottom',
      });
    }

    await toast.present();

    console.log(state);
  }

  async openChangePasswordPopover() {
    const popover = await this.popoverController.create({
      component: ChangePasswordComponent,
      translucent: true,
      componentProps: {
        // Passe quaisquer dados necessários para o componente de alteração de senha aqui
      }
    });
    return await popover.present();
  }

}
