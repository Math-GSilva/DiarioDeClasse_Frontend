import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { onlyUserGuard } from './only-user.guard';

describe('onlyUserGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => onlyUserGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
