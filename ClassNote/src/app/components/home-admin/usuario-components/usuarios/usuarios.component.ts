import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { UserData } from 'src/app/models/user-data.model';
import { ModalController } from '@ionic/angular';
import { FormNewUsuarioComponent } from '../form-new-usuario/form-new-usuario.component';
import { FormEditUsuarioComponent } from '../form-edit-usuario/form-edit-usuario.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  dataSource!: MatTableDataSource<UserData>;
  displayedColumns: string[] = ['action', 'username', 'role', 'password'];
  usuariosListados: UserData[] = [];

  constructor(private usuarioService: UsuarioService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<UserData>([]); // Inicializa com um array vazio de UserData
    this.listarUsuarios();
  }

  listarUsuarios() {
    this.usuarioService.read().subscribe((dados: any) => {
      if (dados && dados.success === 1 && dados.usuarios) {
        this.usuariosListados = dados.usuarios;
        this.dataSource.data = this.usuariosListados;
      } else {
        this.usuariosListados = [];
        this.dataSource.data = [];
        console.error('Erro ao carregar usuários.');
      }
    });
  }

  inspectUser(row: UserData) {
    console.log(row)
    this.openEditUsuarioForm(row)
  }
  createUser() {
    console.log()
    this.openNewUsuarioForm()
  }

  async openNewUsuarioForm() {
    const modal = await this.modalCtrl.create({
      component: FormNewUsuarioComponent,
      cssClass: 'custom-modal',
      mode: 'ios',
      
    });
    await modal.present();
  }

  async openEditUsuarioForm(usuario: UserData) {
    const modal = await this.modalCtrl.create({
      component: FormEditUsuarioComponent,
      componentProps: { Usuario: usuario },
      cssClass: 'custom-modal',
      mode: 'ios',
      
    });
    await modal.present();
  }


  gerarSVG(username: any) {
    const initials = this.usuarioService.generateInitials(username)
    return initials
  }
}
