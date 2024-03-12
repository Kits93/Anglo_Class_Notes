import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  private readonly API = environment.baseApiUrl;

  constructor(private httpClient: HttpClient) { }

  create(disciplina: any) {
    return this.httpClient.post(this.API + 'disciplina/create_disciplina.php', disciplina);
  }

  read() {
    return this.httpClient.get(this.API + 'disciplina/read_disciplina.php');
  }

  update(disciplina: any) {
    return this.httpClient.put(this.API + `disciplina/update_disciplina.php`, disciplina)
  }
  
  delete(id_disciplina: any) {
    return this.httpClient.delete(this.API + `disciplina/delete_disciplina.php?id_disciplina=${id_disciplina}`)
  }
}
