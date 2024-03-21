import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeMonitorPage } from './home-monitor.page';

const routes: Routes = [
  {
    path: '',
    component: HomeMonitorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeMonitorPageRoutingModule {}
