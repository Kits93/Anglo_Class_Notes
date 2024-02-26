import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-gerenciar-usuarios',
  templateUrl: './gerenciar-usuarios.page.html',
  styleUrls: ['./gerenciar-usuarios.page.scss'],
})
export class GerenciarUsuariosPage implements OnInit {

  usuarios: any[] = [];

  constructor(private location: Location, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.listar_usuarios();
  }

  goBack() {
    this.location.back();
  }

  listar_usuarios() {
    this.usuarioService.read().subscribe((dados: any) => {
      if (dados && dados.usuarios) {
        this.usuarios = dados.usuarios;
      } else {
        console.error('Não foram encontrados usuários válidos na resposta do servidor.');
      }
    });
  }

  editarUsuario(usuario:any){
    console.log(usuario)
  }

}
