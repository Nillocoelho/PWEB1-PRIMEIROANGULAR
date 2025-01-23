import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemCadastroProfessorComponent } from './listagem-cadastro-professor.component';

describe('ListagemCadastroProfessorComponent', () => {
  let component: ListagemCadastroProfessorComponent;
  let fixture: ComponentFixture<ListagemCadastroProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListagemCadastroProfessorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemCadastroProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
