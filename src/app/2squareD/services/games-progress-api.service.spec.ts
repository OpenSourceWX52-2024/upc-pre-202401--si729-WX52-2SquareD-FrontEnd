import { TestBed } from '@angular/core/testing';

import { GamesProgressApiService } from './games-progress-api.service';

describe('GamesProgressApiService', () => {
  let service: GamesProgressApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamesProgressApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
