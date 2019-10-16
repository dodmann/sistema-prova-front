import { NgModule } from '@angular/core';
import { ProvaComponent } from './prova.component';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { VisualizarComponent } from './visualizar/visualizar.component';

const routes: Routes = [
  {
    path: 'prova',
    component: ProvaComponent,
    children: [
      {
        path: 'listar',
        component: ListarComponent
      },
      {
        path: 'cadastrar',
        component: CadastrarComponent,
      },
      {
        path: 'visualizar',
        component: VisualizarComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProvaRoutingModule { }
