import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Receita } from '../../model/receita.model';
import { ReceitaService } from '../receita.service';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

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
    private service: ReceitaService,
    private router: Router
  ) {}
  pageTitle = 'Pagina de criação';

  categorias = ['Bolo', 'Torta', 'Salgado', 'Doce', 'Pão', 'Diversos'];

  ngOnInit() {
    this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap((id) => this.service.getReceita(id))
      )
      .subscribe((receita) => {
        this.pageTitle = 'Pagina de edição';
        this.updateForm(receita);
      });

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

    this.service.save(this.formReceita.value).subscribe(
      (sucesso) => {
        if (this.formReceita.value.id) {
          alert('Receita atualizada com sucesso');
        } else {
          alert('Receita salva com sucesso');
        }
        this.router.navigate(['receita/list']);
      },
      (erro) =>
        alert(
          'Não foi possivel salvar/atualizar a receita. Verifique se o json server esta ligado professor. Erro: ' +
            JSON.stringify(erro)
        )
    );
  }

  criarFormulario(receita: Receita) {
    this.formReceita = this.formBuilder.group({
      id: null,
      nome: [receita.nome],
      tempoPreparo: [receita.tempoPreparo],
      descricao: [receita.descricao],
      ingredientes: [receita.ingredientes],
      categoria: [receita.categoria],
      modoPreparo: [receita.modoPreparo],
    });
  }
}
