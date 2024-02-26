import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GerenciarDisciplinasPage } from './gerenciar-disciplinas.page';

describe('GerenciarDisciplinasPage', () => {
  let component: GerenciarDisciplinasPage;
  let fixture: ComponentFixture<GerenciarDisciplinasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GerenciarDisciplinasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
