import { TestBed } from '@angular/core/testing';

import { CovidAppService } from './covid-app.service';

describe('CovidAppService', () => {
  let service: CovidAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
