import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaImmatricolazioniComponent } from './components/lista-immatricolazioni/lista-immatricolazioni.component';
import { NuovaImmatricolazioneComponent } from './components/nuova-immatricolazione/nuova-immatricolazione.component';

const routes: Routes = [
  { path: '', redirectTo: 'lista-immatricolazioni', pathMatch: 'full'},
  { path: 'lista-immatricolazioni', component: ListaImmatricolazioniComponent},
  { path: 'nuova-immatricolazione', component: NuovaImmatricolazioneComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
