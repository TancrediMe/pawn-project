import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovaImmatricolazioneComponent } from './nuova-immatricolazione.component';

describe('NuovaImmatricolazioneComponent', () => {
  let component: NuovaImmatricolazioneComponent;
  let fixture: ComponentFixture<NuovaImmatricolazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuovaImmatricolazioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovaImmatricolazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
