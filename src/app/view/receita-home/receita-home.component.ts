import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './receita-home.component.html',
  styleUrls: ['./receita-home.component.css'],
})
export class HomeComponent implements OnInit {
  pageTitle = 'Pagina home';
  constructor() {}
  ngOnInit(): void {}
}
