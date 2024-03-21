import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { AccessPermissionGuard } from './guard/access-permission/access-permission.guard';
import { CheckAdminTypeGuard } from './guard/check-admin-type/check-admin-type.guard';
import { CheckTeacherTypeGuard } from './guard/check-teacher-type/check-teacher-type.guard';
import { CheckMonitorTypeGuard } from './guard/check-monitor-type/check-monitor-type.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'turma',
    loadChildren: () => import('./pages/professor/turma/turma.module').then(m => m.TurmaPageModule), canActivate: [AccessPermissionGuard, CheckTeacherTypeGuard]
  },
  {
    path: 'turma-aulas',
    loadChildren: () => import('./pages/professor/turma-aulas/turma-aulas.module').then(m => m.TurmaAulasPageModule), canActivate: [AccessPermissionGuard, CheckTeacherTypeGuard]
  },
  {
    path: 'home-admin',
    loadChildren: () => import('./pages/admin/home-admin/home-admin.module').then(m => m.HomeAdminPageModule), canActivate: [AccessPermissionGuard, CheckAdminTypeGuard]
  },
  {
    path: 'home-monitor',
    loadChildren: () => import('./pages/monitor/home-monitor/home-monitor.module').then
      (m => m.HomeMonitorPageModule), canActivate: [AccessPermissionGuard, CheckMonitorTypeGuard]
  },  {
    path: 'monitor-aulas',
    loadChildren: () => import('./pages/monitor/monitor-aulas/monitor-aulas.module').then( m => m.MonitorAulasPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
