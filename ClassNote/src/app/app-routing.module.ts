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
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
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
    path: 'cadastro-aula',
    loadChildren: () => import('./pages/cadastro-aula/cadastro-aula.module').then(m => m.CadastroAulaPageModule), canActivate: [AccessPermissionGuard, CheckTeacherTypeGuard]
  },
  {
    path: 'home-admin',
    loadChildren: () => import('./pages/admin/home-admin/home-admin.module').then(m => m.HomeAdminPageModule), canActivate: [AccessPermissionGuard, CheckAdminTypeGuard]
  },
  {
    path: 'gerenciar-turmas',
    loadChildren: () => import('./pages/admin/gerenciar-turmas/gerenciar-turmas.module').then(m => m.GerenciarTurmasPageModule), canActivate: [AccessPermissionGuard, CheckAdminTypeGuard]
  },
  {
    path: 'gerenciar-disciplinas',
    loadChildren: () => import('./pages/admin/gerenciar-disciplinas/gerenciar-disciplinas.module').then(m => m.GerenciarDisciplinasPageModule), canActivate: [AccessPermissionGuard, CheckAdminTypeGuard]
  },
  {
    path: 'gerenciar-usuarios',
    loadChildren: () => import('./pages/admin/gerenciar-usuarios/gerenciar-usuarios.module').then(m => m.GerenciarUsuariosPageModule), canActivate: [AccessPermissionGuard, CheckAdminTypeGuard]
  },
  {
    path: 'usuario/',
    loadChildren: () => import('./pages/admin/usuario/usuario.module').then(m => m.UsuarioPageModule), canActivate: [AccessPermissionGuard, CheckAdminTypeGuard]
  },
  {
    path: 'minha-conta',
    loadChildren: () => import('./pages/admin/minha-conta/minha-conta.module').then(m => m.MinhaContaPageModule), canActivate: [AccessPermissionGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
