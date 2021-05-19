import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-lista-immatricolazioni',
  templateUrl: './lista-immatricolazioni.component.html',
  styleUrls: ['./lista-immatricolazioni.component.css']
})
export class ListaImmatricolazioniComponent implements OnInit {

  constructor(firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

}
