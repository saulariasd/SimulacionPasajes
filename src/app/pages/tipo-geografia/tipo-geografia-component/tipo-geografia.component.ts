import { Component, OnInit } from '@angular/core';
import { TipoGeografiaService } from 'src/app/services/tipoGeografia/tipo-geografia.service';
import { tipoGeografia } from 'src/app/models/TipoGeografia';

@Component({
  selector: 'app-tipo-geografia',
  templateUrl: './tipo-geografia.component.html',
  styleUrls: ['./tipo-geografia.component.css']
})
export class TipoGeografiaComponent implements OnInit {
  datos: tipoGeografia[];
  // tipo: tipoGeografia;
  tipo: any = {
    codigo: '',
    descripcion: ''
  };
  editTipo: any = {
    codigo: '',
    descripcion: ''
  };
  codigo: string = '';
  constructor(private service: TipoGeografiaService) {
    service.getTipoGeografiaList().subscribe(data => { this.datos = data });
  }

  ngOnInit() {
  }

  registrar() {
    this.service.crearTipoGeografia(this.tipo);
  }

  editar(data) {
    this.editTipo = data;
    console.log('>>>>>>>>>>>>>>>>>>>' + this.editTipo.ID + ', ' + this.editTipo.codigo + ', ' + this.editTipo.descripcion);
  }

  editaTipo() {
    this.service.editarTipo(this.editTipo);
  }

  eliminarTipo(data) {
    this.service.eliminarTipo(data);
  }

  // selecionado(event: any) {
  //   this.codigo = event.target.value;
  //   var aux = this.codigo.split('-');
  //   console.log('CODIGO>>>>>' + aux[0]);
  // }

}
