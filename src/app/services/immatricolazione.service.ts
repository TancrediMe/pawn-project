import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

//Componenti per PDF
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root',
})
export class ImmatricolazioneService {
  constructor(private firestore: AngularFirestore) {}

  /*generaPdf(immatricolazione: any) {
    const docDefinition = {
    };
    pdfMake.createPdf(docDefinition).open();
  }*/

  salvaLista(immatricolazione: any): Promise<any> {
    return this.firestore.collection('lista').add(immatricolazione);
  }

  getLista(): Observable<any> {
    return this.firestore.collection('lista').snapshotChanges();
  }

  deleteLista(id: string): Promise<any> {
    return this.firestore.collection('lista').doc(id).delete();
  }
}
