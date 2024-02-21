import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroAulaPage } from './cadastro-aula.page';

describe('CadastroAulaPage', () => {
  let component: CadastroAulaPage;
  let fixture: ComponentFixture<CadastroAulaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroAulaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
