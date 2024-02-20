import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  validarLogin(form:any){
    // console.log("Olá mundo!")
    console.log(form)

    // this.router.navigate(['../home'])

    this.http.get('').subscribe(users => {
      console.log(users); // Aqui você pode fazer o que quiser com os dados dos usuários, como mostrá-los na interface do usuário
    });
  }

}
