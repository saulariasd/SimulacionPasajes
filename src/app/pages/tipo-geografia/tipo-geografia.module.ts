import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoGeografiaRoutingModule } from './tipo-geografia-routing.module';
import { TipoGeografiaComponent } from './tipo-geografia-component/tipo-geografia.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TipoGeografiaRoutingModule,
    SharedModule
  ]
})
export class TipoGeografiaModule { }
