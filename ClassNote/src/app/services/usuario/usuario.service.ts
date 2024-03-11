import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { UserData } from 'src/app/models/user-data.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  API: any = environment.baseApiUrl;

  constructor(private httpClient: HttpClient) { }

  create(usuario: any) {
    return this.httpClient.post(this.API + 'usuario/create_usuario.php', usuario)
  }

  read() {
    return this.httpClient.get<UserData[]>(this.API + 'usuario/read_usuario.php').pipe(
      tap(usuarios => {
        console.log(usuarios);
      })
    );
  }

  readOne(id_user: any) {
    return this.httpClient.post(this.API + `usuario/readOne_usuario.php`, id_user).pipe(
      tap(usuario => {
        console.log(usuario);
      })
    );
  }

  update(userData: any) {
    return this.httpClient.put(this.API + `usuario/update_usuario.php`, userData);
  }

  delete(id_user: any) {
    return this.httpClient.delete(this.API + `usuario/delete_usuario.php?id_usuario=${id_user}`);
  }  

  generateInitials(name: string): string {
    const words = name.split(' ');
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    }
    const initials = words[0].charAt(0) + words[words.length - 1].charAt(0);
    return initials.toUpperCase();
  }

}
