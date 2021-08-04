import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'materias',
    loadChildren: () => import('./pages/materias/materias.module').then( m => m.MateriasPageModule)
  },
  {
    path: 'horarios/:id',
    loadChildren: () => import('./pages/horarios/horarios.module').then( m => m.HorariosPageModule)
  },
  {
    path: 'disponibilidad/:id',
    loadChildren: () => import('./pages/disponibilidad/disponibilidad.module').then( m => m.DisponibilidadPageModule)
  },
  {
    path: 'guardado',
    loadChildren: () => import('./pages/guardado/guardado.module').then( m => m.GuardadoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
