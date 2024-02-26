import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  API: any = environment.baseApiUrl;

  constructor(private httpClient: HttpClient) { }

  read() {
    return this.httpClient.get(this.API + 'usuario/read_usuario.php').pipe(
      tap(usuarios => {
        console.log(usuarios);
      })
    );
  }
  
}
