import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerenciarDisciplinasPage } from './gerenciar-disciplinas.page';

const routes: Routes = [
  {
    path: '',
    component: GerenciarDisciplinasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerenciarDisciplinasPageRoutingModule {}
