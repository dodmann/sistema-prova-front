import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssuntoComponent } from './assunto/assunto.component';
import { QuestaoComponent } from './questao/questao.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';

@NgModule({
  declarations: [
    AppComponent,
    AssuntoComponent,
    QuestaoComponent,
    DisciplinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
