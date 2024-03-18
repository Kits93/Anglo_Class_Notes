import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitorAulasPageRoutingModule } from './monitor-aulas-routing.module';

import { MonitorAulasPage } from './monitor-aulas.page';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CalendarComponent } from 'src/app/components/calendar/calendar.component';
import { FormAulaComponent } from 'src/app/components/teacher/form-aula/form-aula.component';
import { AulaService } from 'src/app/services/aula/aula.service';
import { DisciplinaService } from 'src/app/services/disciplina/disciplina.service';
import { TurmaService } from 'src/app/services/turma/turma.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonitorAulasPageRoutingModule,
    HttpClientModule,
    CalendarComponent,
    FormAulaComponent,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatDatepickerModule
  ],
  providers: [AulaService, TurmaService, DisciplinaService, UsuarioService],
  declarations: [MonitorAulasPage]
})
export class MonitorAulasPageModule {}
