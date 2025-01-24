import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListagemComponent} from "./usuario/listagem/listagem.component";
import {ManutencaoComponent} from "./usuario/manutencao/manutencao.component";
import {ListagemCadastroComponent} from "./usuario/listagem-cadastro/listagem-cadastro.component";
import { ListagemCadastroProfessorComponent } from './usuario/listagem-cadastro-professor/listagem-cadastro-professor.component';
import { ListagemProfessorComponent } from './usuario/listagem-professor/listagem-professor.component';
import { ManutencaoProfessorComponent } from './usuario/manutencao-professor/manutencao-professor.component';

const routes: Routes = [
  {
    path: 'listagem-alunos',
    component: ListagemComponent
  },
  {
    path: 'cadastro-aluno',
    component: ManutencaoComponent
  },
  {
    path: 'listagem-cadastro-alunos',
    component: ListagemCadastroComponent
  },
  {
    path:'listagem-cadastro-professor',
    component: ListagemCadastroProfessorComponent
  },
  {
    path:'listagem-professor',
    component: ListagemProfessorComponent
  },
  {
    path:'manutencao-professor',
    component: ManutencaoProfessorComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
