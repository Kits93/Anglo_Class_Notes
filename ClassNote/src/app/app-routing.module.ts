import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { AccessPermissionGuard } from './guard/access-permission/access-permission.guard';
import { CheckAdminTypeGuard } from './guard/check-admin-type/check-admin-type.guard';
import { CheckTeacherTypeGuard } from './guard/check-teacher-type/check-teacher-type.guard';


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
    loadChildren: () => import('./pages/turma/turma.module').then(m => m.TurmaPageModule), canActivate: [AccessPermissionGuard, CheckTeacherTypeGuard]
  },
  {
    path: 'turma-aulas',
    loadChildren: () => import('./pages/turma-aulas/turma-aulas.module').then(m => m.TurmaAulasPageModule), canActivate: [AccessPermissionGuard, CheckTeacherTypeGuard]
  },
  {
    path: 'home-admin',
    loadChildren: () => import('./pages/admin/home-admin/home-admin.module').then(m => m.HomeAdminPageModule), canActivate: [AccessPermissionGuard, CheckAdminTypeGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
