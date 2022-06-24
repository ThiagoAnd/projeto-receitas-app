import { Component, OnInit } from '@angular/core';
import { ReceitaService } from '../receita.service';
import { Receita } from '../../model/receita.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receita-list',
  templateUrl: './receita-list.component.html',
  styleUrls: ['./receita-list.component.css'],
})
export class ReceitaListComponent implements OnInit {
  pageTitle = 'Pagina de listagem';
  receitas!: Receita[];
  dataSource!: Receita[];
  displayedColumns: string[] = [
    'id',
    'nome',
    'tempoPreparo',
    'categoria',
    'editar',
    'cancelar',
    'visualizar',
  ];

  constructor(private service: ReceitaService, private router: Router) {}
  ngOnInit(): void {
    this.service.list().subscribe((receitas) => {
      this.receitas = receitas;
      this.dataSource = this.receitas;
      console.log('Retornou as receitas');
      console.log(this.receitas);
    });
  }

  edit(id: number) {
    this.router.navigate(['editar', id]);
  }

  view(id: number) {
    this.router.navigate(['visualizar', id]);
  }

  delete(id: number) {
    if (confirm('Deseja realmente deletar a receita?') == true) {
      this.service.remove(id).subscribe(
        (sucesso) => window.location.reload(),
        (erro) => alert('Erro ao deletar receita')
      );
    }
  }
}
