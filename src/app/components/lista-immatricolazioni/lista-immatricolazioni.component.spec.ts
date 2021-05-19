import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaImmatricolazioniComponent } from './lista-immatricolazioni.component';

describe('ListaImmatricolazioniComponent', () => {
  let component: ListaImmatricolazioniComponent;
  let fixture: ComponentFixture<ListaImmatricolazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaImmatricolazioniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaImmatricolazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
