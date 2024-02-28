import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { TurmaAulasPageRoutingModule } from './turma-aulas-routing.module';

import { TurmaAulasPage } from './turma-aulas.page';
import { AulaService } from 'src/app/services/aula/aula.service';
import { TurmaService } from 'src/app/services/turma/turma.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurmaAulasPageRoutingModule,
    HttpClientModule
  ],
  providers: [AulaService,TurmaService],
  declarations: [TurmaAulasPage]
})
export class TurmaAulasPageModule { }
