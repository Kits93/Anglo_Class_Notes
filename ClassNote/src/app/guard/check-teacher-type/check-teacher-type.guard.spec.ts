import { TestBed } from '@angular/core/testing';

import { CheckTeacherTypeGuard } from './check-teacher-type.guard';

describe('CheckTeacherTypeGuard', () => {
  let guard: CheckTeacherTypeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckTeacherTypeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
