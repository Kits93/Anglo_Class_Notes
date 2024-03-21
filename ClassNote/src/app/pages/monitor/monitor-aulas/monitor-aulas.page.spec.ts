import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonitorAulasPage } from './monitor-aulas.page';

describe('MonitorAulasPage', () => {
  let component: MonitorAulasPage;
  let fixture: ComponentFixture<MonitorAulasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MonitorAulasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
