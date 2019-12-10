import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoGeografiaComponent } from './tipo-geografia-component/tipo-geografia.component';


const routes: Routes = [{
  path:'',
  component:TipoGeografiaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoGeografiaRoutingModule { }
