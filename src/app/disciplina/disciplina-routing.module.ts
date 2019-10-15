import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisciplinaComponent } from './disciplina.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';


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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisciplinaRoutingModule { }
