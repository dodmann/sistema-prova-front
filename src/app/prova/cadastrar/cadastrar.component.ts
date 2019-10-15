import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Select2OptionData } from 'ng-select2';

@Component({
  selector: 'app-cadastrar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  tabs: any[] = [
    { title: 'Respostas', content: 'Respostas', disabled: true },
  ];

  supernani: string;
  nani: string;
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
  

  ngOnInit() {
  }

  constructor() { }

}
