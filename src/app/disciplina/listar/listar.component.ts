import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Disciplina } from '../disciplina-model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  contentArray: Array<Disciplina>;
  returnedArray: Disciplina[];

  ngOnInit(): void {
    this.contentArray = [null, null, null, null, null, null, null, null, null, null];
    this.contentArray.push(null, null, null, null, null, null, null, null, null, null);
    this.contentArray.push(null, null, null, null, null, null, null, null, null, null);
    let i = 0;
    this.contentArray = this.contentArray.map(() => {
      let disciplina = new Disciplina();
      i++;
      disciplina.id = i;
      disciplina.nome = "Disciplina de número lorem ipsum dolor sit amet etc etc etc etc" + i;
      return disciplina;
    });
    this.returnedArray = this.contentArray.slice(0, 10);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.contentArray.slice(startItem, endItem);
  }

}
