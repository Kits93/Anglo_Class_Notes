import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitorAulasPage } from './monitor-aulas.page';

const routes: Routes = [
  {
    path: '',
    component: MonitorAulasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitorAulasPageRoutingModule {}
