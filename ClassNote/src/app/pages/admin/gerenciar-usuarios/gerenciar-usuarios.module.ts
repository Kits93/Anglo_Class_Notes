import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { GerenciarUsuariosPageRoutingModule } from './gerenciar-usuarios-routing.module';

import { GerenciarUsuariosPage } from './gerenciar-usuarios.page';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GerenciarUsuariosPageRoutingModule,
    HttpClientModule
  ],
  providers: [UsuarioService],
  declarations: [GerenciarUsuariosPage]
})
export class GerenciarUsuariosPageModule {}
