import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ImmatricolazioneService } from 'src/app/services/immatricolazione.service';

@Component({
  selector: 'app-nuova-immatricolazione',
  templateUrl: './nuova-immatricolazione.component.html',
  styleUrls: ['./nuova-immatricolazione.component.css'],
})
export class NuovaImmatricolazioneComponent implements OnInit {
  creaImmatricolazione: FormGroup;
  formData: any[] = [];
  veicolo: any;
  temp: any;

  constructor(
    private firestore: AngularFirestore,
    private fb: FormBuilder,
    private _immatricolazioneService: ImmatricolazioneService
  ) {
    this.creaImmatricolazione = this.fb.group({
      OMOLOGAZIONE_N: ['', Validators.required],
      DEL_DATA: ['', Validators.required],
      FABBRICA: ['', Validators.required],
      SEDE: ['', Validators.required],
      VEICOLO: ['', Validators.required],
      TIPO: ['', Validators.required],
      PORTATA_UTILE: ['', Validators.required],
      TELAIO_N: ['', Validators.required],
      CARROZZERIA: ['', Validators.required],
      LUNGHEZZA_MAX: ['', Validators.required],
      LARGHEZZA_MAX: ['', Validators.required],
      N_ASSI: ['', Validators.required],
      PNEUMATICI: ['', Validators.required],
      PTT: ['', Validators.required],
      TARA: ['', Validators.required],
      ID_PRATICA: [''],
    });
  }
  ngOnInit(): void {
    /*  this.veicolo =  */ this.firestore
      .collection('veicolo')
      .doc('ITC300B')
      .valueChanges()
      .subscribe((val: any) => {
        console.log('VALUE===', val);
      });

    console.log('il nome è==', this.veicolo);

    this.temp = this.firestore
      .collection('veicolo')
      .snapshotChanges()
      .pipe(map((val) => val.map((data) => data.payload.doc.data())));

    this.temp.subscribe((val: any[]) => {
      val.map((key) => {
        this.formData[key.TIPO] = key;
      });
    });
  }

  onChange(event: any) {
    if (event.toString() == Object.keys(this.formData)[0]) {
      this.creaImmatricolazione.setValue({
        OMOLOGAZIONE_N: this.formData[event].OMOLOGAZIONE_N,
        DEL_DATA: this.formData[event].DEL_DATA,
        FABBRICA: this.formData[event].FABBRICA,
        SEDE: this.formData[event].SEDE,
        VEICOLO: this.formData[event].VEICOLO,
        TIPO: this.formData[event].TIPO,
        PORTATA_UTILE: this.formData[event]['PORTATA UTILE'],
        TELAIO_N: this.formData[event].TELAIO_N,
        CARROZZERIA: this.formData[event].CARROZZERIA,
        LUNGHEZZA_MAX: this.formData[event].LUNGHEZZA_MAX,
        LARGHEZZA_MAX: this.formData[event].LARGHEZZA_MAX,
        N_ASSI: this.formData[event].N_ASSI,
        PNEUMATICI: this.formData[event].PNEUMATICI,
        PTT: this.formData[event].PTT,
        TARA: this.formData[event].TARA,
        ID_PRATICA: null,
      });
    } else {
      this.creaImmatricolazione.setValue({
        OMOLOGAZIONE_N: this.formData[event].OMOLOGAZIONE_N,
        DEL_DATA: this.formData[event].DEL_DATA,
        FABBRICA: this.formData[event].FABBRICA,
        SEDE: this.formData[event].SEDE,
        VEICOLO: this.formData[event].VEICOLO,
        TIPO: this.formData[event].TIPO,
        PORTATA_UTILE: this.formData[event]['PORTATA UTILE'],
        TELAIO_N: this.formData[event].TELAIO_N,
        CARROZZERIA: this.formData[event].CARROZZERIA,
        LUNGHEZZA_MAX: this.formData[event].LUNGHEZZA_MAX,
        LARGHEZZA_MAX: this.formData[event].LARGHEZZA_MAX,
        N_ASSI: this.formData[event].N_ASSI,
        PNEUMATICI: this.formData[event].PNEUMATICI,
        PTT: this.formData[event].PTT,
        TARA: this.formData[event].TARA,
        ID_PRATICA: null,
      });
    }
  }
  salvaLista() {
    console.log('FORM==', this.creaImmatricolazione.value);

    const immatricolazione: any = {
      ...this.creaImmatricolazione.value,
      ANNO_COSTRUZIONE: new Date().getFullYear(),
    };
    console.log('RIDAMMI', immatricolazione);
    this._immatricolazioneService
      .salvaLista(immatricolazione)
      .then(() => {
        console.log('Immatricolazione registrata con successo');
      })
      .catch((error) => {
        console.log('ERRORE', error);
      });
    this._immatricolazioneService.generaPdf(immatricolazione);
  }
}
