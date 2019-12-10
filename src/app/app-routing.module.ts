import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoGeografiaComponent } from './pages/tipo-geografia/tipo-geografia-component/tipo-geografia.component';
import { GeografiaComponent} from './pages/geografia/geografia-component/geografia.component';
const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: './pages/inicio/inicio.module#InicioModule'
  },
  {
    path: 'tipo',
    loadChildren: './pages/tipo-geografia/tipo-geografia.module#TipoGeografiaModule'
  },
  {
    path: 'geografia',
    loadChildren: './pages/geografia/geografia.module#GeografiaModule'
  },
  {
    path: 'ruta',
    loadChildren: './pages/ruta/ruta.module#RutaModule'
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
