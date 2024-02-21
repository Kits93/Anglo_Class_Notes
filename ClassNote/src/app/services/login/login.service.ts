import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  // private readonly API = environment.baseApiUrl


  // post(dados: any){
  //   return this.httpClient.post(this.API + 'login/login.php', dados);
  // }

}
