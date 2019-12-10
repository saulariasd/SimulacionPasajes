import { Component, OnInit } from '@angular/core';
import { TipoGeografiaService } from 'src/app/services/tipoGeografia/tipo-geografia.service';
import { GeografiaService } from 'src/app/services/geografia/geografia.service';
import { tipoGeografia } from 'src/app/models/TipoGeografia';
import { geografia } from 'src/app/models/geografia';

@Component({
  selector: 'app-geografia',
  templateUrl: './geografia.component.html',
  styleUrls: ['./geografia.component.css']
})
export class GeografiaComponent implements OnInit {
  datosT: tipoGeografia[];
  datos: geografia[];
  tipo: any = {
    codigoT: '',
    descripcion: ''
  };
  geografia: any = {
    codigo: '',
    descripcion: '',
    padre: '',
    tipo: ''
  };
  editGeografia: any = {
    codigo: '',
    descripcion: '',
    padre: '',
    tipo: ''
  };
  codigoT: string = '';
  codigo: string = '';
  constructor(private serviceT: TipoGeografiaService, private service: GeografiaService) {
    serviceT.getTipoGeografiaList().subscribe(dataT => { this.datosT = dataT });
    service.getGeografiaList().subscribe(data => { this.datos = data });
  }

  ngOnInit() {
  }

  registrar() {
    this.service.crearGeografia(this.geografia);
  }

  editar(data) {
    this.editGeografia = data;
    console.log('>>>>>>>>>>>>>>>>>>>' + this.editGeografia.ID + ', ' + this.editGeografia.codigo + ', '
      + this.editGeografia.descripcion + ', ' + this.editGeografia.tipo + ', ' + this.editGeografia.padre);
  }

  editaGeo() {
    this.service.editarGeografia(this.editGeografia);
  }

  eliminarTipo(data) {
    this.service.eliminarGeografia(data);
  }

  selecionado(event: any) {
    this.codigoT = event.target.value;
    // var aux = this.codigo.split('-');
    console.log('CODIGO>>>>>' + this.codigoT);
  }

  selecionadoP(event: any) {
    console.log('ENTRA>>>>>');
    this.codigo = event.target.value;
    // var aux = this.codigo.split('-');
    console.log('CODIGO>>>>>' + this.codigo);
  }


}
