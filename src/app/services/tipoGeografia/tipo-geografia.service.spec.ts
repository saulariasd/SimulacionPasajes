import { TestBed } from '@angular/core/testing';

import { TipoGeografiaService } from './tipo-geografia.service';

describe('TipoGeografiaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoGeografiaService = TestBed.get(TipoGeografiaService);
    expect(service).toBeTruthy();
  });
});
