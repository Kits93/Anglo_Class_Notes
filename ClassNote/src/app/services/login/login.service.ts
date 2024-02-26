import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = environment.baseApiUrl

  constructor(private httpClient: HttpClient) { }

  autorizarJwt(token: any) {
    localStorage.setItem('token', token)
  }

  loginState() {
    let token = localStorage.getItem('token');
    return this.httpClient.post(this.API + 'login/verificarLogin.php', { 'token': token });
  }

  loginVerify(login: any[]) {
    console.log(login)
    return this.httpClient.post(this.API + 'login/login.php', login);
  }

  logout(){
    localStorage.clear()
  }

}
