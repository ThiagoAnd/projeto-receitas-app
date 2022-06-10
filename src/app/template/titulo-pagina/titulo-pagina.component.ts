import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-pagina',
  templateUrl: './titulo-pagina.component.html',
  styleUrls: ['./titulo-pagina.component.css']
})
export class TituloPaginaComponent implements OnInit {

  @Input() titulo: string = 'fff';
  constructor() { }

  ngOnInit(): void {
  }

}