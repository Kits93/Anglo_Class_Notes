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
  return this.httpClient.post(this.API + 'disciplina/create_disciplina.php', disciplina[0]);
  }

  read() {
    return this.httpClient.get(this.API + 'disciplina/read_disciplina.php');
  }
}
