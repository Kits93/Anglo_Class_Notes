import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  private readonly API = environment.baseApiUrl;

  constructor(private httpClient: HttpClient) { }

  post(disciplina:any){
  return this.httpClient.post(this.API + 'clientes/insert_clientes.php', disciplina[0]);
  }
}
