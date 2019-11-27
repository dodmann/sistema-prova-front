import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';
import { VisualizarComponent } from './visualizar/visualizar.component';
import { QuestaoComponent } from './questao.component';
import { QuestaoRoutingModule } from './questao-routing.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [CadastrarComponent, ListarComponent, VisualizarComponent, QuestaoComponent],
  imports: [
    CommonModule,
    QuestaoRoutingModule,
    PaginationModule.forRoot()
  ]
  
})
export class QuestaoModule { }
