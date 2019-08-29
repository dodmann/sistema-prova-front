import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssuntoComponent } from './assunto/assunto.component';
import { QuestaoComponent } from './questao/questao.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';


const routes: Routes = [
  { path: 'assunto', component: AssuntoComponent },
  { path: 'questao', component: QuestaoComponent },
  { path: 'disciplina', component: DisciplinaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
