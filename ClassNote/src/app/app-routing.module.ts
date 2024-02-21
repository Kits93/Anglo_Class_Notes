import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'turma-aulas',
    loadChildren: () => import('./pages/turma-aulas/turma-aulas.module').then( m => m.TurmaAulasPageModule)
  },
  {
    path: 'turma',
    loadChildren: () => import('./pages/turma/turma.module').then( m => m.TurmaPageModule)
  },
  {
    path: 'cadastro-aula',
    loadChildren: () => import('./pages/cadastro-aula/cadastro-aula.module').then( m => m.CadastroAulaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
