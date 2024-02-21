import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

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
      this.router.navigate(['../home']);
    } else {
      console.log('Formulário inválido!');
    }
  }

}
