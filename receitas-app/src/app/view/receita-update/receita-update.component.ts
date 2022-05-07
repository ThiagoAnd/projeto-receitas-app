import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receita-update',
  templateUrl: './receita-update.component.html',
  styleUrls: ['./receita-update.component.css']
})
export class ReceitaUpdateComponent implements OnInit {

  id:number | undefined;
  pageTitle = 'Pagina de atualização';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
        this.route.params.subscribe(
      (params:any) => {
        this.id = params.id;

      }
    )
  }

}
