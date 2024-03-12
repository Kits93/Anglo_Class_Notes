import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { UserData } from 'src/app/models/user-data.model';
import { AlertController, ModalController } from '@ionic/angular';
import { FormNewUsuarioComponent } from '../form-new-usuario/form-new-usuario.component';
import { FormEditUsuarioComponent } from '../form-edit-usuario/form-edit-usuario.component';
import { ComunicationService } from 'src/app/services/comunication/comunication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit, OnDestroy {
  dataSource!: MatTableDataSource<UserData>;
  displayedColumns: string[] = ['action', 'username', 'email', 'role', 'delete'];
  usuariosListados: UserData[] = [];

  private fecharModalSubscription: Subscription;

  constructor(private usuarioService: UsuarioService, private comunicationService: ComunicationService, private modalCtrl: ModalController, private alertCtrl: AlertController) {
    this.fecharModalSubscription = this.comunicationService.fecharModal$.subscribe(() => {
      this.listarUsuarios();
    });
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<UserData>([]);
    this.listarUsuarios();
  }

  ngOnDestroy() {
    this.fecharModalSubscription.unsubscribe();
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

  handleRowClick(event: MouseEvent, row: UserData) {
    const target = event.target as HTMLElement;
    if (!target.classList.contains('delete-icon')) {
      this.inspectUser(row);
    }
  }

  inspectUser(row: UserData) {
    console.log(row)
    this.openEditUsuarioForm(row)
  }

  createUser() {
    this.openNewUsuarioForm()
  }

  async deleteUser(id_user: any) {
    console.log(id_user)
    const alert = await this.alertCtrl.create({
      header: 'Atenção!',
      message: 'Tem certeza que deseja excluir este usuário?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Exclusão cancelada');
          }
        },
        {
          text: 'Excluir',
          handler: () => {
            this.usuarioService.delete(id_user).subscribe(() => {
              this.listarUsuarios();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  async openNewUsuarioForm() {
    const modal = await this.modalCtrl.create({
      component: FormNewUsuarioComponent,
      cssClass: 'custom-modal',
      mode: 'ios',
    });

    modal.onDidDismiss().then(() => {
      console.log('Modal de novo usuário fechado')
    })

    await modal.present();
  }

  async openEditUsuarioForm(usuario: UserData) {
    const modal = await this.modalCtrl.create({
      component: FormEditUsuarioComponent,
      componentProps: { Usuario: usuario },
      cssClass: 'custom-modal',
      mode: 'ios',
    });

    modal.onDidDismiss().then(() => {
      console.log('Modal de edição de usuário fechado')
    })

    await modal.present();
  }

  gerarSVG(username: any) {
    const initials = this.usuarioService.generateInitials(username)
    return initials
  }
}