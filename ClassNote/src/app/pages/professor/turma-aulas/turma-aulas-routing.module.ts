import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurmaAulasPage } from './turma-aulas.page';

const routes: Routes = [
  {
    path: '',
    component: TurmaAulasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TurmaAulasPageRoutingModule {}
