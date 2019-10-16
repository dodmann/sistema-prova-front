//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

//Módulos da aplicação
import { AppRoutingModule } from './app-routing.module';
import { ProvaModule } from './prova/prova.module';
import { DisciplinaModule } from './disciplina/disciplina.module';

//Módulos do Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuestaoModule } from './questao/questao.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DisciplinaModule,
    ProvaModule,
    QuestaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
