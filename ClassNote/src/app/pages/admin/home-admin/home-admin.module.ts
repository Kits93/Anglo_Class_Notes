import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

import { IonicModule } from '@ionic/angular';

import { HomeAdminPageRoutingModule } from './home-admin-routing.module';

import { HomeAdminPage } from './home-admin.page';

import { InicioComponent } from 'src/app/components/home-admin/inicio/inicio.component';
import { DisciplinasComponent } from 'src/app/components/home-admin/disciplinas/disciplinas.component';
import { TurmasComponent } from 'src/app/components/home-admin/turmas/turmas.component';
import { MyAccountComponent } from 'src/app/components/home-admin/my-account/my-account.component';
import { UsuariosComponent } from 'src/app/components/home-admin/usuarios/usuarios.component';

import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { TurmaService } from 'src/app/services/turma/turma.service';
import { AulaService } from 'src/app/services/aula/aula.service';
import { DisciplinaService } from 'src/app/services/disciplina/disciplina.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    MatTableModule,
    HomeAdminPageRoutingModule
  ],
  providers: [UsuarioService, TurmaService, AulaService, DisciplinaService],
  declarations: [HomeAdminPage, InicioComponent, DisciplinasComponent, TurmasComponent, MyAccountComponent, UsuariosComponent]
})
export class HomeAdminPageModule { }
