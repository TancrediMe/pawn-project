import { TestBed } from '@angular/core/testing';

import { ImmatricolazioneService } from './immatricolazione.service';

describe('ImmatricolazioneService', () => {
  let service: ImmatricolazioneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImmatricolazioneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
