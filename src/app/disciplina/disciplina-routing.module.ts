import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisciplinaComponent } from './disciplina.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';
import { VisualizarComponent } from './visualizar/visualizar.component';

const routes: Routes = [
  {
    path: 'disciplina',
    component: DisciplinaComponent,
    children: [
      {
        path: 'cadastrar',
        component: CadastrarComponent
      },
      {
        path: 'listar',
        component: ListarComponent
      },
      {
        path: 'visualizar',
        component: VisualizarComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisciplinaRoutingModule { }
