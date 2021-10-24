import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tema',
    loadChildren: () => import('./pages/tema/tema.module').then( m => m.TemaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'curso',
    loadChildren: () => import('./pages/curso/curso.module').then( m => m.CursoPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./pages/ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'estudiantes',
    loadChildren: () => import('./pages/estudiantes/estudiantes.module').then( m => m.EstudiantesPageModule)
  },
  {
    path: 'empresa',
    loadChildren: () => import('./pages/empresa/empresa.module').then( m => m.EmpresaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
