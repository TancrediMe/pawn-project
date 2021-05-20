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

  generaPdf(immatricolazione: any) {
    const docDefinition = {
      content: [
        {
          text: 'OMOLOGAZIONE N°',
          margin: [200, 30, 136, 25],
          fontSize: 8,
        },

        {
          text: immatricolazione.OMOLOGAZIONE_N,
          margin: [200, -25, 1, 5],
          fontSize: 14,
        },

        {
          text: 'del',
          margin: [300, -20, 136, 25],
          fontSize: 12,
        },

        {
          text: immatricolazione.DEL_DATA,
          margin: [340, -40, 1, 5],
          fontSize: 14,
        },

        {
          text: 'FABBRICA',
          margin: [10, 5, 136, 25],
          fontSize: 18,
        },

        {
          text: immatricolazione.FABBRICA,
          margin: [200, -46, 0, 25],
          fontSize: 18,
        },

        {
          text: 'SEDE',
          margin: [10, 0, 136, 25],
          fontSize: 18,
        },

        {
          text: immatricolazione.SEDE,
          margin: [200, -48, 0, 25],
          fontSize: 18,
        },

        {
          text: 'VEICOLO',
          margin: [10, 0, 136, 25],
          fontSize: 18,
        },

        {
          text: immatricolazione.VEICOLO,
          margin: [200, -48, 0, 25],
          fontSize: 18,
        },

        {
          text: 'TIPO',
          margin: [10, 0, 136, 25],
          fontSize: 18,
        },

        {
          text: immatricolazione.TIPO,
          margin: [200, -48, 0, 25],
          fontSize: 18,
        },

        {
          text: 'PORTATA UTILE Kg.',
          margin: [10, 0, 136, 25],
          fontSize: 18,
        },

        {
          text: immatricolazione.PORTATA_UTILE,
          margin: [200, -47, 0, 25],
          fontSize: 18,
        },

        {
          text: 'TELAIO N°',
          margin: [10, 0, 136, 25],
          fontSize: 18,
        },

        {
          text: immatricolazione.TELAIO_N,
          margin: [200, -47, 0, 25],
          fontSize: 18,
        },

        {
          text: 'CARROZZERIA',
          margin: [10, 0, 136, 25],
          fontSize: 18,
        },

        {
          text: immatricolazione.CARROZZERIA,
          margin: [200, -47, 0, 25],
          fontSize: 18,
        },

        {
          text: 'DICHIARAZIONE N°',
          margin: [200, -10, 136, 25],
          fontSize: 8,
        },

        {
          text: immatricolazione.ID_PRATICA,
          margin: [210, -20, 0, 25],
          fontSize: 18,
        },

        {
          text: 'CERTIFICATO DI GARANZIA',
          margin: [150, 30, 40, 25],
          fontSize: 18,
        },

        {
          text: 'DATI IDENTIFICATIVI:',
          margin: [10, -28, 40, 25],
          fontSize: 12,
        },

        {
          text: 'OMOLOGAZIONE N°:',
          margin: [10, -20, 136, 25],
          fontSize: 8,
        },

        {
          text: immatricolazione.OMOLOGAZIONE_N,
          margin: [20, -20, 136, 25],
          fontSize: 12,
        },

        {
          text: 'CARRELLO RIMORCHIO TIPO:',
          margin: [120, -53, 136, 25],
          fontSize: 8,
        },

        {
          text: immatricolazione.TIPO,
          margin: [130, -21, 136, 25],
          fontSize: 12,
        },

        {
          text: 'ANNO COSTRUZIONE',
          margin: [265, -53, 136, 25],
          fontSize: 8,
        },

        {
          text: immatricolazione.ANNO_COSTRUZIONE,
          margin: [270, -20, 0, 25],
          fontSize: 12,
        },

        {
          text: 'N° TELAIO',
          margin: [420, -53, 13, 25],
          fontSize: 8,
        },

        {
          text: immatricolazione.TELAIO_N,
          margin: [420, -20, 0, 25],
          fontSize: 12,
        },

        {
          text: 'LUNGHEZZA MAX',
          margin: [10, -15, 136, 25],
          fontSize: 8,
        },

        {
          text: immatricolazione.LUNGHEZZA_MAX,
          margin: [10, -23, 136, 25],
          fontSize: 12,
        },

        {
          text: 'LARGHEZZA MAX',
          margin: [120, -50, 136, 25],
          fontSize: 8,
        },

        {
          text: immatricolazione.LARGHEZZA_MAX,
          margin: [118, -23, 136, 25],
          fontSize: 12,
        },

        {
          text: 'N. ASSI',
          margin: [220, -50, 136, 25],
          fontSize: 8,
        },

        {
          text: immatricolazione.N_ASSI,
          margin: [220, -24, 136, 25],
          fontSize: 12,
        },

        {
          text: 'PNEUMATICI',
          margin: [270, -50, 13, 25],
          fontSize: 8,
        },

        {
          text: immatricolazione.PNEUMATICI,
          margin: [265, -23, 136, 25],
          fontSize: 12,
        },

        {
          text: 'CARROZZERIA',
          margin: [360, -50, 13, 25],
          fontSize: 8,
        },

        {
          text: immatricolazione.CARROZZERIA,
          margin: [360, -23, 0, 25],
          fontSize: 12,
        },

        {
          text: 'PTT Kg.',
          margin: [450, -50.2, 13, 25],
          fontSize: 8,
        },

        {
          text: immatricolazione.PTT,
          margin: [450, -23, 0, 25],
          fontSize: 12,
        },

        {
          text: 'TARA Kg.',
          margin: [15, -20, 136, 25],
          fontSize: 8,
        },

        {
          text: immatricolazione.TARA,
          margin: [10, -20, 136, 25],
          fontSize: 12,
        },

        {
          text: 'PORTATA Kg.',
          margin: [85, -53, 136, 25],
          fontSize: 8,
        },

        {
          text: immatricolazione.PORTATA_UTILE,
          margin: [85, -20, 136, 25],
          fontSize: 12,
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'right',
          margin: [0, 190, 0, 80],
        },
        subheader: {
          fontSize: 14,
        },
        superMargin: {
          margin: [20, 0, 40, 0],
          fontSize: 15,
        },
      },
    };
    pdfMake.createPdf(docDefinition).open();
  }

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
