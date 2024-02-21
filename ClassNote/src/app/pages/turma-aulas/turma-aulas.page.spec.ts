import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TurmaAulasPage } from './turma-aulas.page';

describe('TurmaAulasPage', () => {
  let component: TurmaAulasPage;
  let fixture: ComponentFixture<TurmaAulasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TurmaAulasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
