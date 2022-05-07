import { Component, OnInit } from '@angular/core';
import { ReceitaService } from '../receita.service';
import { Receita } from '../../model/receita.model';

@Component({
  selector: 'app-receita-list',
  templateUrl: './receita-list.component.html',
  styleUrls: ['./receita-list.component.css'],
})
export class ReceitaListComponent implements OnInit {
  pageTitle = 'Pagina de listagem';
  receitas!: Receita[];
  constructor(private service: ReceitaService) {}
  ngOnInit(): void {
    this.service.list().subscribe((receitas) => {
      this.receitas = receitas;
      console.log("Retornou as receitas")
      console.log(this.receitas)
    });
  }
}
