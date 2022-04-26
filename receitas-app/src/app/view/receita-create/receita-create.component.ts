import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receita-create',
  templateUrl: './receita-create.component.html',
  styleUrls: ['./receita-create.component.css'],
})
export class ReceitaCreateComponent implements OnInit {
  constructor() {}
  titulo = 'Pagina de criação';
  ngOnInit(): void {}


  salvarReceita(){
    alert("Testando Event Binding para atividade06")
  }
}
