import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GerenciarTurmasPage } from './gerenciar-turmas.page';

describe('GerenciarTurmasPage', () => {
  let component: GerenciarTurmasPage;
  let fixture: ComponentFixture<GerenciarTurmasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GerenciarTurmasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
