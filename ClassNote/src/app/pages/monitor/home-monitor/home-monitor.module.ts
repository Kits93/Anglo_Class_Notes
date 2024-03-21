import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeMonitorPageRoutingModule } from './home-monitor-routing.module';

import { HomeMonitorPage } from './home-monitor.page';

import { SideMenuMonitorComponent } from 'src/app/components/side-menu-monitor/side-menu-monitor.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { TurmaService } from 'src/app/services/turma/turma.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeMonitorPageRoutingModule,
    HttpClientModule
  ],
  providers: [UsuarioService, TurmaService],
  declarations: [HomeMonitorPage, SideMenuMonitorComponent]
})
export class HomeMonitorPageModule { }
