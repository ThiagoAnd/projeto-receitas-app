import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receita-list',
  templateUrl: './receita-list.component.html',
  styleUrls: ['./receita-list.component.css']
})
export class ReceitaListComponent implements OnInit {

  pageTitle = 'Pagina de listagem';
  constructor() { }
  ngOnInit(): void {
  }

}
