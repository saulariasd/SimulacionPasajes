import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { tipoGeografia } from 'src/app/models/TipoGeografia';
import { analytics } from 'firebase';
@Injectable({
  providedIn: 'root'
})


export class TipoGeografiaService {
  private tipoGeografiaDoc: AngularFirestoreDocument<tipoGeografia>;
  private tipoGeografiaCollection: AngularFirestoreCollection<tipoGeografia>;
  tipoGeografiaList: Observable<tipoGeografia[]>;
  TIPO_GEOGRAFIA: any = 'TipoGeografia';
  aux: any;
  constructor(private conexion: AngularFirestore) {

    this.tipoGeografiaCollection = conexion.collection<tipoGeografia>(this.TIPO_GEOGRAFIA);
    this.tipoGeografiaList = this.tipoGeografiaCollection.snapshotChanges().pipe(map(data => data.map(d => {
      const DATOS = d.payload.doc.data() as tipoGeografia;
      const ID = d.payload.doc.id;
      return { ID, ...DATOS };
    })));
  }

  getTipoGeografiaList() {
    return this.tipoGeografiaList;
  }

  crearTipoGeografia(tipoGeografia: tipoGeografia) {
    this.tipoGeografiaCollection.add(tipoGeografia);
  }

  editarTipo(tipoGeografia) {
    this.tipoGeografiaDoc = this.conexion.doc<tipoGeografia>(`${this.TIPO_GEOGRAFIA}/${tipoGeografia.ID}`);
    this.aux = { codigo: tipoGeografia.codigo, descripcion: tipoGeografia.descripcion };
    this.tipoGeografiaDoc.update(this.aux);
  }

  eliminarTipo(tipoGeografia) {
    this.tipoGeografiaDoc = this.conexion.doc<tipoGeografia>(`${this.TIPO_GEOGRAFIA}/${tipoGeografia.ID}`);
    this.tipoGeografiaDoc.delete();
  }
}