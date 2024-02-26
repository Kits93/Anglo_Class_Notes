import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GerenciarTurmasPageRoutingModule } from './gerenciar-turmas-routing.module';

import { GerenciarTurmasPage } from './gerenciar-turmas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GerenciarTurmasPageRoutingModule
  ],
  declarations: [GerenciarTurmasPage]
})
export class GerenciarTurmasPageModule {}
