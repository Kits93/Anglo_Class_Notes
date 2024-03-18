import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { TurmaPageRoutingModule } from './turma-routing.module';

import { TurmaPage } from './turma.page';
import { TurmaService } from 'src/app/services/turma/turma.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { SideMenuProfessorComponent } from 'src/app/components/side-menu-professor/side-menu-professor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurmaPageRoutingModule,
    HttpClientModule
  ],
  providers: [TurmaService, UsuarioService],
  declarations: [TurmaPage, SideMenuProfessorComponent]
})
export class TurmaPageModule { }
