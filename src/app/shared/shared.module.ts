import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TipoGeografiaComponent } from '../pages/tipo-geografia/tipo-geografia-component/tipo-geografia.component';
import { InicioComponent } from '../pages/inicio/inicio-component/inicio.component';
import { GeografiaComponent } from '../pages/geografia/geografia-component/geografia.component';
import { RutaComponent } from '../pages/ruta/ruta-component/ruta.component';



@NgModule({
  declarations: [InicioComponent, TipoGeografiaComponent, GeografiaComponent, RutaComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [CommonModule, FormsModule, InicioComponent, TipoGeografiaComponent, GeografiaComponent, RutaComponent]
})
export class SharedModule { }
