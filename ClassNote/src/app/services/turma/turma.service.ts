import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  API: any = environment.baseApiUrl

  turmas: any = []

  constructor(private httpClient: HttpClient) { }

  create(turma: any) {
    return this.httpClient.post(this.API + 'turma/create_turma.php', turma);
  }

  read() {
    return this.httpClient.get(this.API + 'turma/read_turma.php').pipe(
      tap(turmas => {
        console.log(turmas);
        this.turmas = turmas;
      })
    );
  }

  readOne(fk_id_turma: any) {
    return this.httpClient.post(this.API + 'turma/readOne_turma.php' , fk_id_turma)
  }

}
