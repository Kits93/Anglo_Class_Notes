import { TestBed } from '@angular/core/testing';

import { CheckMonitorTypeGuard } from './check-monitor-type.guard';

describe('CheckMonitorTypeGuard', () => {
  let guard: CheckMonitorTypeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckMonitorTypeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
