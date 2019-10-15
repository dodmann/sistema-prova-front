import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestaoComponent } from './questao.component';
import { ListarComponent } from './listar/listar.component';
import { VisualizarComponent } from './visualizar/visualizar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

const routes: Routes = [
  {
    path: 'questao',
    component: QuestaoComponent,
    children: [
      {
        path: 'listar',
        component: ListarComponent
      },
      {
        path: 'visualizar',
        component: VisualizarComponent
      },
      {
        path: 'cadastrar',
        component: CadastrarComponent,
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestaoRoutingModule { }
