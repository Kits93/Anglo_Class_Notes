import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastController } from '@ionic/angular';
// import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private http: HttpClient, private toastController: ToastController) { }

  ngOnInit() {
    this.createFormAdd(); // Chame o método para criar o formulário quando o componente é inicializado
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

  validarLogin() {
    if (this.UserForm.valid) {
      let usuario = {
        username: this.UserForm.value.username,
        password: this.UserForm.value.password
      };



      console.log(usuario);
      // this.router.navigate(['../home']);

      // this.loginService.post(usuario)
      this.presentToast('ok')

    } else {
      this.presentToast('error')
      console.log('Formulário inválido!');
    }
  }


  // toast

  async presentToast(state: 'ok' | 'error') {

    let toast: any

    if (state == 'ok') {
      toast = await this.toastController.create({
        message: 'success!',
        duration: 1500,
        color: 'success',
        position: 'bottom',
      });
    } else {
      toast = await this.toastController.create({
        message: 'fail!',
        duration: 1500,
        color: 'danger',
        position: 'bottom',
      });
    }

    await toast.present();

    console.log(state)



  }
}
