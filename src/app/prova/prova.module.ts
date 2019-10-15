import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ListarComponent } from './listar/listar.component';
import { VisualizarComponent } from './visualizar/visualizar.component';
import { ProvaRoutingModule } from './prova-routing.module';
import { ProvaComponent } from './prova.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CadastrarComponent, ListarComponent, VisualizarComponent, ProvaComponent],
  imports: [
    CommonModule,
    ProvaRoutingModule,
    TabsModule.forRoot(),
    BrowserAnimationsModule,
    TypeaheadModule.forRoot(),
    FormsModule
  ]
})
export class ProvaModule { }
