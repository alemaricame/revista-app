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
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'init',
    loadChildren: () => import('./init/init.module').then( m => m.InitPageModule)
  }, 
  {path: 'salud',
    loadChildren: () => import('./salud/salud.module').then( m => m.SaludPageModule)
  },
  {
    path: 'cumpleanos-mes',
    loadChildren: () => import('./cumpleanos-mes/cumpleanos-mes.module').then( m => m.CumpleanosMesPageModule)
  },
  {
    path: 'el-mejor-equipo',
    loadChildren: () => import('./el-mejor-equipo/el-mejor-equipo.module').then( m => m.ElMejorEquipoPageModule)
  },
  {
    path: 'premio-a-la-excelencia',
    loadChildren: () => import('./premio-a-la-excelencia/premio-a-la-excelencia.module').then( m => m.PremioALaExcelenciaPageModule)
  },
  {
    path: 'view-player',
    loadChildren: () => import('./view-player/view-player.module').then( m => m.ViewPlayerPageModule)
  },
  {
    path: 'generacion',
    loadChildren: () => import('./generacion/generacion.module').then( m => m.GeneracionPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'salud-mes',
    loadChildren: () => import('./salud-mes/salud-mes.module').then( m => m.SaludMesPageModule)
  },
  {
    path: 'convenios',
    loadChildren: () => import('./convenios/convenios.module').then( m => m.ConveniosPageModule)
  },
  {
    path: 'los-de-cajon',
    loadChildren: () => import('./los-de-cajon/los-de-cajon.module').then( m => m.LosDeCajonPageModule)
  },
  {
    path: 'aqui-estamos',
    loadChildren: () => import('./aqui-estamos/aqui-estamos.module').then( m => m.AquiEstamosPageModule)
  },
  {
    path: 'linea-covid',
    loadChildren: () => import('./linea-covid/linea-covid.module').then( m => m.LineaCovidPageModule)
  },
  {
    path: 'informacion-que-cura',
    loadChildren: () => import('./informacion-que-cura/informacion-que-cura.module').then( m => m.InformacionQueCuraPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
