import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Questao } from '../questao-model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor() { }

  contentArray = new Array(30).fill(new Questao());
  returnedArray: Questao[];

  ngOnInit(): void {
    let i = 0;
    this.contentArray.forEach((questao: Questao) => {
      questao.id = i++
      questao.nome = "Questão de número " + i
    });
    console.log(this.contentArray);
    this.returnedArray = this.contentArray.slice(0, 10);
    console.log(this.returnedArray);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.contentArray.slice(startItem, endItem);
  }
}
