import { TestBed } from '@angular/core/testing';

import { ClerkUserService } from './clerk-user.service';

describe('ClerkUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClerkUserService = TestBed.get(ClerkUserService);
    expect(service).toBeTruthy();
  });
});
