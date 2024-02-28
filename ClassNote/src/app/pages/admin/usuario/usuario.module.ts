import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importe o ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { UsuarioPageRoutingModule } from './usuario-routing.module';

import { UsuarioPage } from './usuario.page';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { ChangePasswordComponent } from 'src/app/components/change-password/change-password.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UsuarioPageRoutingModule,
    HttpClientModule
  ],
  providers: [UsuarioService],
  declarations: [UsuarioPage, ChangePasswordComponent]
})
export class UsuarioPageModule {}
