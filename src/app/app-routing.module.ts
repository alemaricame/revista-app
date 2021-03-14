import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'portada',
    pathMatch: 'full'
  },
  {
    path: 'portada',
    loadChildren: () => import('./portada/portada.module').then( m => m.PortadaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'contenido',
    loadChildren: () => import('./contenido/contenido.module').then( m => m.ContenidoPageModule)
  },
  {
    path: 'conocenos',
    loadChildren: () => import('./conocenos/conocenos.module').then( m => m.ConocenosPageModule)
  },
  {
    path: 'de-manteles-largos',
    loadChildren: () => import('./de-manteles-largos/de-manteles-largos.module').then( m => m.DeMantelesLargosPageModule)
  },
  {
    path: 'tu-historia',
    loadChildren: () => import('./tu-historia/tu-historia.module').then( m => m.TuHistoriaPageModule)
  },
  {
    path: 'muro-del-desarrollo',
    loadChildren: () => import('./muro-del-desarrollo/muro-del-desarrollo.module').then( m => m.MuroDelDesarrolloPageModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./eventos/eventos.module').then( m => m.EventosPageModule)
  },
  {
    path: 'lo-que-tenemos-para-ti',
    loadChildren: () => import('./lo-que-tenemos-para-ti/lo-que-tenemos-para-ti.module').then( m => m.LoQueTenemosParaTiPageModule)
  },
  {
    path: 'salud',
    loadChildren: () => import('./salud/salud.module').then( m => m.SaludPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
