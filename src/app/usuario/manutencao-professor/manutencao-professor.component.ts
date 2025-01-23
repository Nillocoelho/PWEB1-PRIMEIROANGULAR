import { Component } from '@angular/core';
import { PROFESSORES } from '../../shared/modelo/PROFESSORES';
import { Professor } from '../../shared/modelo/professor';

@Component({
  selector: 'app-manutencao-professor',
  standalone: false,
  
  templateUrl: './manutencao-professor.component.html',
  styleUrl: './manutencao-professor.component.css'
})
export class ManutencaoProfessorComponent {
  PROFESSORES = PROFESSORES;
  professorDeCadastro: Professor;

  constructor() {
    this.professorDeCadastro = new Professor();
  }
  cadastrar() {
    this.PROFESSORES.push(this.professorDeCadastro);
    this.professorDeCadastro = new Professor();
  }

}
