import { Component, OnInit } from '@angular/core';
import { geografia } from 'src/app/models/geografia';
import { ruta } from 'src/app/models/ruta';
import { GeografiaService } from 'src/app/services/geografia/geografia.service';
import { RutaService } from 'src/app/services/ruta/ruta.service';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent implements OnInit {
  datosG: geografia[];
  datos: ruta[];
  geografia: any = {
    codigo: '',
    descripcion: '',
    padre: '',
    tipo: ''
  };
  ruta: any = {
    codigo: '',
    descripcion: '',
    origen: '',
    destino: '',
    valorMinimo: ''
  }

  editRuta: any = {
    codigo: '',
    descripcion: '',
    origen: '',
    destino: '',
    valorMinimo: ''
  }
  codigoG: string = '';
  codigo: string = '';
  codigoD: string = '';
  constructor(private serviceG: GeografiaService, private service: RutaService) {
    serviceG.getGeografiaList().subscribe(dataG => { this.datosG = dataG });
    service.getRutaList().subscribe(data => { this.datos = data });
  }

  ngOnInit() {
  }

  registrar() {
    this.service.crearRuta(this.ruta);
  }

  editar(data) {
    this.editRuta = data;
    console.log('>>>>>>>>>>>>>>>>>>>' + this.editRuta.ID + ', ' + this.editRuta.codigo + ', '
      + this.editRuta.descripcion + ', ' + this.editRuta.origen + ', ' + this.editRuta.destino + ', ' + this.editRuta.valorMinimo);
  }

  editaRuta() {
    this.service.editarRuta(this.editRuta);
  }

  eliminarRuta(data) {
    this.service.eliminarRuta(data);
  }

  selecionado(event: any) {
    this.codigoG = event.target.value;
    // var aux = this.codigo.split('-');
    console.log('CODIGO>>>>>' + this.codigoG);
  }

  selecionadoGO(event: any) {
    console.log('ENTRA>>>>>');
    this.codigo = event.target.value;
    // var aux = this.codigo.split('-');
    console.log('CODIGO>>>>>' + this.codigo);
  }

  selecionadoGD(event: any) {
    console.log('ENTRA>>>>>');
    this.codigoD = event.target.value;
    // var aux = this.codigo.split('-');
    console.log('CODIGO>>>>>' + this.codigoD);
  }
}
