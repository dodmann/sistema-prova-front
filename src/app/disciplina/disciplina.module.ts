import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';
import { AssuntoComponent } from './assunto/assunto.component';
import { DisciplinaRoutingModule } from './disciplina-routing.module';
import { DisciplinaComponent } from './disciplina.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { VisualizarComponent } from './visualizar/visualizar.component';

@NgModule({
  declarations: [CadastrarComponent, ListarComponent, AssuntoComponent, DisciplinaComponent, VisualizarComponent],
  imports: [
    CommonModule,
    DisciplinaRoutingModule,
    PaginationModule.forRoot()
  ]
})
export class DisciplinaModule { }
