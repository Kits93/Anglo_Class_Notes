import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurmaAulasPageRoutingModule } from './turma-aulas-routing.module';

import { TurmaAulasPage } from './turma-aulas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurmaAulasPageRoutingModule
  ],
  declarations: [TurmaAulasPage]
})
export class TurmaAulasPageModule {}
