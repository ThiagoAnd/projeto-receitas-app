import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Shared } from 'src/app/util/shared';
import { Receita } from '../../model/receita.model';
import { ReceitaService } from '../receita.service';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receita-create',
  templateUrl: './receita-create.component.html',
  styleUrls: ['./receita-create.component.css'],
})
export class ReceitaCreateComponent implements OnInit {
  receitas?: Receita[];

  formReceita!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: ReceitaService
  ) {}
  pageTitle = 'Pagina de criação';

  categorias = ['Bolo', 'Torta', 'Salgado', 'Doce', 'Pão', 'Diversos'];

  ngOnInit() {
    this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap((id) => this.service.getReceita(id))
      )
      .subscribe((receita) => this.updateForm(receita));

    this.criarFormulario(new Receita());
  }
  updateForm(receita: Receita) {
    this.formReceita.patchValue({
      id: receita.id,
      nome: receita.nome,
      tempoPreparo: receita.tempoPreparo,
      descricao: receita.descricao,
      ingredientes: receita.ingredientes,
      categoria: receita.categoria,
      modoPreparo: receita.modoPreparo,
    });
  }

  onSubmit() {
    if (!this.formReceita.valid) return;

    this.service.create(this.formReceita.value).subscribe(
      (sucesso) => {
        alert("Receita salva com sucesso");
         window.location.reload();
      },
      (erro) => alert("Não foi possivel salvar a receita. Verifique se o json server esta ligado professor. Erro: "+JSON.stringify(erro))
    );
  }

  criarFormulario(receita: Receita) {
    console.log('receita criar formularioasdf: ' + JSON.stringify(receita));
    this.formReceita = this.formBuilder.group({
      nome: [receita.nome],
      tempoPreparo: [receita.tempoPreparo],
      descricao: [receita.descricao],
      ingredientes: [receita.ingredientes],
      categoria: [receita.categoria],
      modoPreparo: [receita.modoPreparo],
    });
  }
}
