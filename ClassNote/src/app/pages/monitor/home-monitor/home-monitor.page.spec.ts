import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeMonitorPage } from './home-monitor.page';

describe('HomeMonitorPage', () => {
  let component: HomeMonitorPage;
  let fixture: ComponentFixture<HomeMonitorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeMonitorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
