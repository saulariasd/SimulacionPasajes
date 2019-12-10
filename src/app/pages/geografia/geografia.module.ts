import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeografiaRoutingModule } from './geografia-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GeografiaRoutingModule,
    SharedModule
  ]
})
export class GeografiaModule { }
