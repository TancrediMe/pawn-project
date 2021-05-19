import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImmatricolazioneService {
  constructor(private firestore: AngularFirestore) {}

  salvaLista(immatricolazione: any): Promise<any> {
    return this.firestore.collection('lista').add(immatricolazione);
  }

  getLista(): Observable<any> {
    return this.firestore.collection('lista').snapshotChanges();
  }
}
