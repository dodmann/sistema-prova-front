import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssuntoComponent } from './assunto/assunto.component';
import { QuestaoComponent } from './questao/questao.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './questao/view/view.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view', component: ViewComponent },
  { path: 'assunto', component: AssuntoComponent },
  { path: 'questao', component: QuestaoComponent },
  { path: 'disciplina', component: DisciplinaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
