import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { geografia } from 'src/app/models/geografia';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeografiaService {
  private geografiaDoc:AngularFirestoreDocument<geografia>;
  private geografiaCollection: AngularFirestoreCollection<geografia>;
  geografiaList: Observable<geografia[]>;
  GEOGRAFIA: any = 'geografia';
  aux: any;


  constructor(private conexion:AngularFirestore) {
    this.geografiaCollection = conexion.collection<geografia>(this.GEOGRAFIA);
    this.geografiaList = this.geografiaCollection.snapshotChanges().pipe(map(data => data.map(d => {
      const DATOS = d.payload.doc.data() as geografia;
      const ID = d.payload.doc.id;
      return { ID, ...DATOS };
    })));
  }

  getGeografiaList() {
    return this.geografiaList;
  }

  crearGeografia(geografia: geografia) {
    this.geografiaCollection.add(geografia);
  }

  editarGeografia(geografia) {
    this.geografiaDoc = this.conexion.doc<geografia>(`${this.GEOGRAFIA}/${geografia.ID}`);
    this.aux = { codigo: geografia.codigo, descripcion: geografia.descripcion };
    this.geografiaDoc.update(this.aux);
  }

  eliminarGeografia(geografia) {
    this.geografiaDoc = this.conexion.doc<geografia>(`${this.GEOGRAFIA}/${geografia.ID}`);
    this.geografiaDoc.delete();
  }
}
