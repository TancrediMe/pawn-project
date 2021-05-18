import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaImmatricolazioniComponent } from './components/lista-immatricolazioni/lista-immatricolazioni.component';
import { NuovaImmatricolazioneComponent } from './components/nuova-immatricolazione/nuova-immatricolazione.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaImmatricolazioniComponent,
    NuovaImmatricolazioneComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
