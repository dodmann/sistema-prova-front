import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {

  items = [];
  pageOfItems: Array<any>;

  constructor() { }

  ngOnInit() {
    // an example array of 150 items to be paged
    this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Disciplina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat ${i + 1}` }));
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

}
