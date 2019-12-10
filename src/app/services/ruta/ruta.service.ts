import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { ruta } from 'src/app/models/ruta';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RutaService {
  private rutaDoc: AngularFirestoreDocument<ruta>;
  private rutaCollection: AngularFirestoreCollection<ruta>;
  rutaList: Observable<ruta[]>;
  RUTA: any = 'ruta';
  aux: any;

  constructor(private conexion: AngularFirestore) {
    this.rutaCollection = conexion.collection<ruta>(this.RUTA);
    this.rutaList = this.rutaCollection.snapshotChanges().pipe(map(data => data.map(d => {
      const DATOS = d.payload.doc.data() as ruta;
      const ID = d.payload.doc.id;
      return { ID, ...DATOS };
    })));
  }

  getRutaList() {
    return this.rutaList;
  }

  crearRuta(ruta: ruta) {
    this.rutaCollection.add(ruta);
  }

  editarRuta(ruta) {
    this.rutaDoc = this.conexion.doc<ruta>(`${this.RUTA}/${ruta.ID}`);
    this.aux = { codigo: ruta.codigo, descripcion: ruta.descripcion };
    this.rutaDoc.update(this.aux);
  }

  eliminarRuta(ruta) {
    this.rutaDoc = this.conexion.doc<ruta>(`${this.RUTA}/${ruta.ID}`);
    this.rutaDoc.delete();
  }
}
