import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nuova-immatricolazione',
  templateUrl: './nuova-immatricolazione.component.html',
  styleUrls: ['./nuova-immatricolazione.component.css']
})
export class NuovaImmatricolazioneComponent implements OnInit {
//veicolo: Observable<any>;
veicolo: object;
constructor(firestore: AngularFirestore) {
  this.veicolo = firestore.collection('veicolo').valueChanges();
   console.log("il nome è",this.veicolo);

 //this.veicolo = firestore.collection('veicolo').valueChanges().subscribe(val =>{ 
    //console.log(val);  
 //})
 }

   // this.veicolo = firestore.collection('veicolo').valueChanges();
   // console.log("il nome è",this.veicolo);

  ngOnInit(): void {
    
  }

}
