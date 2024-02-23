import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ToastController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private http: HttpClient, private toastController: ToastController, private loginService: LoginService) { }

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

  validarLogin(form: any) {
    // Configurar cabeçalhos CORS
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' // Permitindo solicitações de qualquer origem
      })
    };

    // Fazer solicitação HTTP com cabeçalhos CORS configurados
    this.loginService.loginVerify(form).subscribe((data: any) => {
      console.log(data);
      if (data.success == '1') {
        this.loginService.autorizarJwt(data.token);
        this.presentToast('ok');
        this.router.navigate(['../turma']);
      } else {
        this.presentToast('error');
        // console.log('Formulário inválido!');
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
}
