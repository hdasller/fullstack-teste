import { TestBed, inject } from '@angular/core/testing';

import { GplService } from './gpl.service';

describe('GplService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GplService]
    });
  });

  it('should be created', inject([GplService], (service: GplService) => {
    expect(service).toBeTruthy();
  }));
});
