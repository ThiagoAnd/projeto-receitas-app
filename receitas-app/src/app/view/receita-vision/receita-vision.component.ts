import { Component, OnInit } from '@angular/core';
import { ReceitaService } from '../receita.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-receita-vision',
  templateUrl: './receita-vision.component.html',
  styleUrls: ['./receita-vision.component.css']
})
export class ReceitaVisionComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private service: ReceitaService
  ) { }

  ngOnInit(): void {

    this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap((id) => this.service.getReceita(id))
      )
      .subscribe((receita) => alert(JSON.stringify(receita)));
  }

}
