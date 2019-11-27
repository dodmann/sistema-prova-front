import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Prova } from '../prova-model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  contentArray: Array<Prova>;
  returnedArray: Prova[];

  ngOnInit(): void {
    this.contentArray = [null, null, null, null, null, null, null, null, null, null];
    this.contentArray.push(null, null, null, null, null, null, null, null, null, null);
    this.contentArray.push(null, null, null, null, null, null, null, null, null, null);
    let i = 0;
    this.contentArray = this.contentArray.map(() => {
      let prova = new Prova();
      i++;
      prova.id = i;
      prova.nome = "Prova de número lorem ipsum dolor sit amet etc etc etc etc" + i;
      return prova;
    });
    this.returnedArray = this.contentArray.slice(0, 10);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.contentArray.slice(startItem, endItem);
  }

}
