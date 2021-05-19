import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ImmatricolazioneService {
  constructor(private firestore: AngularFirestore) {}

  salvaLista(immatricolazione: any): Promise<any> {
    return this.firestore.collection('lista').add(immatricolazione);
  }
}
