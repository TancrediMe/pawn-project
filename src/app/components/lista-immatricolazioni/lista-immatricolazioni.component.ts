import { Component, OnInit } from '@angular/core';
import { ImmatricolazioneService } from 'src/app/services/immatricolazione.service';

@Component({
  selector: 'app-lista-immatricolazioni',
  templateUrl: './lista-immatricolazioni.component.html',
  styleUrls: ['./lista-immatricolazioni.component.css'],
})
export class ListaImmatricolazioniComponent implements OnInit {
  immatricolazione: any[] = [];

  constructor(private _immatricolazioneService: ImmatricolazioneService) {}

  ngOnInit(): void {
    this.getLista();
  }

  getLista() {
    this._immatricolazioneService.getLista().subscribe((data) => {
      this.immatricolazione = [];
      data.forEach((element: any) => {
        this.immatricolazione.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        });
      });
      console.log(this.immatricolazione);
    });
  }

  deleteLista(id: string) {
    this._immatricolazioneService
      .deleteLista(id)
      .then(() => {
        console.log('Cancellazione avvenuta con successo');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  generaPdf(immatricolazione: any) {
    this._immatricolazioneService.generaPdf(immatricolazione);
  }
}
