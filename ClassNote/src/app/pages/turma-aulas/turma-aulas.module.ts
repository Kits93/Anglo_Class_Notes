import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { TurmaAulasPageRoutingModule } from './turma-aulas-routing.module';
import { TurmaAulasPage } from './turma-aulas.page';
import { AulaService } from 'src/app/services/aula/aula.service';
import { DisciplinaService } from 'src/app/services/disciplina/disciplina.service';
import { TurmaService } from 'src/app/services/turma/turma.service';
import { CalendarComponent } from 'src/app/components/calendar/calendar.component';
import { FormAulaComponent } from 'src/app/components/form-aula/form-aula.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurmaAulasPageRoutingModule,
    HttpClientModule,
    CalendarComponent,
    FormAulaComponent,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatDatepickerModule
  ],
  providers: [AulaService, TurmaService, DisciplinaService, UsuarioService],
  declarations: [TurmaAulasPage]
})
export class TurmaAulasPageModule { }
