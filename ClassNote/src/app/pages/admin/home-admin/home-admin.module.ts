import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

import { IonicModule } from '@ionic/angular';

import { HomeAdminPageRoutingModule } from './home-admin-routing.module';

import { HomeAdminPage } from './home-admin.page';

import { InicioComponent } from 'src/app/components/home-admin/inicio/inicio.component';
import { DisciplinasComponent } from 'src/app/components/home-admin/disciplina-components/disciplinas/disciplinas.component';
import { TurmasComponent } from 'src/app/components/home-admin/turma-components/turmas/turmas.component';
import { MyAccountComponent } from 'src/app/components/home-admin/my-account/my-account.component';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { TurmaService } from 'src/app/services/turma/turma.service';
import { AulaService } from 'src/app/services/aula/aula.service';
import { DisciplinaService } from 'src/app/services/disciplina/disciplina.service';
import { UsuariosComponent } from 'src/app/components/home-admin/usuario-components/usuarios/usuarios.component';
import { AulasComponent } from 'src/app/components/home-admin/turma-components/aulas/aulas.component';
import { CalendarComponent } from 'src/app/components/calendar/calendar.component';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { SideMenuComponent } from 'src/app/components/side-menu/side-menu.component';
import { MenuController } from '@ionic/angular';


@NgModule({
  imports: [
    RouterModule,
    MatSelectModule,
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    MatTableModule,
    HomeAdminPageRoutingModule,
    ReactiveFormsModule,
    CalendarComponent,
  ],
  providers: [UsuarioService, MenuController, TurmaService, AulaService, DisciplinaService],
  declarations: [HomeAdminPage, SideMenuComponent, InicioComponent, DisciplinasComponent, TurmasComponent, AulasComponent, MyAccountComponent, UsuariosComponent, AulasComponent]
})
export class HomeAdminPageModule { }
