import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeAdminPage } from './home-admin.page';
import { DisciplinasComponent } from 'src/app/components/home-admin/disciplina-components/disciplinas/disciplinas.component';
import { InicioComponent } from 'src/app/components/home-admin/inicio/inicio.component';
import { TurmasComponent } from 'src/app/components/home-admin/turma-components/turmas/turmas.component';
import { UsuariosComponent } from 'src/app/components/home-admin/usuario-components/usuarios/usuarios.component';
import { MyAccountComponent } from 'src/app/components/home-admin/my-account/my-account.component';
import { FormNewUsuarioComponent } from 'src/app/components/home-admin/usuario-components/form-new-usuario/form-new-usuario.component';
import { AulasComponent } from 'src/app/components/home-admin/turma-components/aulas/aulas.component';

const routes: Routes = [
  {
    path: '',
    component: HomeAdminPage,
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'turmas', component: TurmasComponent },
      { path: 'aulas', component: AulasComponent },
      { path: 'disciplinas', component: DisciplinasComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'form-new-usuario', component: FormNewUsuarioComponent },
      { path: 'my-account', component: MyAccountComponent },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeAdminPageRoutingModule { }
