import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AulaService {

  API: any = environment.baseApiUrl;

  constructor(private httpClient: HttpClient) { }

  create(aula: any[]) {
    return this.httpClient.post(this.API + 'aula/create_aula.php', aula);
  }

  read(data: any) {
    return this.httpClient.post(this.API + 'aula/read_aula.php', data);
  }

  update(aula: any[]) {
    return this.httpClient.put(this.API + 'aula/update_aula.php', aula);
  }


}
