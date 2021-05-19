import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Moduli
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
//Componenti
import { AppComponent } from './app.component';
import { ListaImmatricolazioniComponent } from './components/lista-immatricolazioni/lista-immatricolazioni.component';
import { NuovaImmatricolazioneComponent } from './components/nuova-immatricolazione/nuova-immatricolazione.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ListaImmatricolazioniComponent,
    NuovaImmatricolazioneComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
