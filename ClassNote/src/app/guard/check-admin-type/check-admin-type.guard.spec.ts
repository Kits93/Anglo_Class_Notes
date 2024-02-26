import { TestBed } from '@angular/core/testing';

import { CheckAdminTypeGuard } from './check-admin-type.guard';

describe('CheckUserTypeGuard', () => {
  let guard: CheckAdminTypeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckAdminTypeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
