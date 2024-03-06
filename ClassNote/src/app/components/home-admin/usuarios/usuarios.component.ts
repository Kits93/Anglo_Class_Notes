import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { UserData } from 'src/app/models/user-data.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  dataSource!: MatTableDataSource<UserData>;
  displayedColumns: string[] = ['id_usuario', 'username', 'role', 'password'];
  usuariosListados: UserData[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<UserData>([]); // Inicializa com um array vazio de UserData
    this.listarUsuarios();
  }

  listarUsuarios() {
    this.usuarioService.read().subscribe((dados: any) => {
      if (dados && dados.success === 1 && dados.usuarios) {
        this.usuariosListados = dados.usuarios;
        this.dataSource.data = this.usuariosListados; // Atribui os dados ao dataSource
      } else {
        this.usuariosListados = [];
        this.dataSource.data = []; // Atualiza o dataSource com um array vazio
        // Aqui você pode adicionar uma mensagem de erro
        console.error('Erro ao carregar usuários.');
      }
    });
  }
}
