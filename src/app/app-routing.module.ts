import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastrarComponent } from './questao/cadastrar/cadastrar.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {
    path: 'cadastrar_questao',
    component: CadastrarComponent,
    outlet: 'cadastrar_questao'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
