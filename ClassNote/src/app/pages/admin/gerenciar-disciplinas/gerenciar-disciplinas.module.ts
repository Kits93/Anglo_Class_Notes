import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GerenciarDisciplinasPageRoutingModule } from './gerenciar-disciplinas-routing.module';

import { GerenciarDisciplinasPage } from './gerenciar-disciplinas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GerenciarDisciplinasPageRoutingModule
  ],
  declarations: [GerenciarDisciplinasPage]
})
export class GerenciarDisciplinasPageModule {}
