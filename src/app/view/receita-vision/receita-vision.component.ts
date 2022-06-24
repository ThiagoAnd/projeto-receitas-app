import { Component, OnInit } from '@angular/core';
import { ReceitaService } from '../receita.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Receita } from 'src/app/model/receita.model';

@Component({
  selector: 'app-receita-vision',
  templateUrl: './receita-vision.component.html',
  styleUrls: ['./receita-vision.component.css'],
})
export class ReceitaVisionComponent implements OnInit {
  pageTitle = 'Pagina de visualização';

  constructor(
    private route: ActivatedRoute,
    private service: ReceitaService,
    private router: Router
  ) {}
  nome?: string;
  descricao?: string;
  categoria?: string;
  tempoPreparo!: number;
  ingredientes?: string;
  modoPreparo?: string;

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap((id) => this.service.getReceita(id))
      )
      .subscribe((receita: Receita) => {
        this.nome = receita.nome;
        this.descricao = receita.descricao;
        this.categoria = receita.categoria;
        this.tempoPreparo = receita.tempoPreparo;
        this.ingredientes = receita.ingredientes;
        this.modoPreparo = receita.modoPreparo;
      });
  }

  backToList() {
    this.router.navigate(['receita/list']);
  }

  print() {
    window.print();
  }
}
