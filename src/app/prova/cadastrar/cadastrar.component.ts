import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs/tabset.component';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-cadastrar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})

export class CadastrarComponent{

  @ViewChild('tabs', { static: false }) tabs: TabsetComponent;

  desabilitarAba() {
    this.tabs.tabs[1].disabled = this.formulario.controls.tipoQuestao.value == "objetiva";
  }

  formulario: FormGroup;
  editor = ClassicEditor;

  select1: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
  ];

  select2: string[] = [
    'Colorado',
    'Connecticut',
    'Delaware',
  ];

  ngAfterViewInit() {
    this.desabilitarAba();
  }

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      disciplina: ['', Validators.required],
      assunto: ['', [Validators.required]],
      titulo: ['', [Validators.required, Validators.minLength(10)]],
      tipoQuestao: ['objetiva', Validators.required],
      dificuldade: ['', Validators.required],
      corpoQuestao: ['Teste de conteúdo', Validators.required],
      comentarios: ['', Validators.required],
      opcaoCorreta: ['', Validators.required],
      distrator1: ['', Validators.required],
      distrator2: ['', Validators.required],
      distrator3: ['', Validators.required],
      distrator4: ['', Validators.required],
      inputDisciplina: ['', Validators.required],
      inputAssunto: ['', Validators.required],
    });
  }

  salvar() {
    console.log(this.formulario.controls.corpoQuestao.value);
  }

}
