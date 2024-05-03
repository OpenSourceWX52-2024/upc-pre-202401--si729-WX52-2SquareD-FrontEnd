import { TestBed } from '@angular/core/testing';

import { MathGamesApiService } from './math-games-api.service';

describe('MathGamesApiService', () => {
  let service: MathGamesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathGamesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
