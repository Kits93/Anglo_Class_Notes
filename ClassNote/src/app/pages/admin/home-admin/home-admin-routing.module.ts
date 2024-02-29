import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeAdminPage } from './home-admin.page';
import { DisciplinasComponent } from 'src/app/components/home-admin/disciplinas/disciplinas.component';
import { InicioComponent } from 'src/app/components/home-admin/inicio/inicio.component';
import { TurmasComponent } from 'src/app/components/home-admin/turmas/turmas.component';
import { UsuariosComponent } from 'src/app/components/home-admin/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: HomeAdminPage,
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'turmas', component: TurmasComponent },
      { path: 'disciplinas', component: DisciplinasComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeAdminPageRoutingModule { }
