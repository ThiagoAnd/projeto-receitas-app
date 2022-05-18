import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Receita } from '../../model/receita.model';
import { ReceitaService } from '../receita.service';


@Component({
  selector: 'app-receita-create',
  templateUrl: './receita-create.component.html',
  styleUrls: ['./receita-create.component.css'],
})
export class ReceitaCreateComponent implements OnInit {
  formReceita!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private service: ReceitaService) {}
  pageTitle = 'Pagina de criação';

  ngOnInit() {
    this.criarFormulario(new Receita());
  }

  onSubmit() {
    console.log('Entrou no fluxo do submit');
    console.log(this.formReceita.value);
    console.log(this.formReceita.valid);
    if(!this.formReceita.valid)
      return;
    this.service.create(this.formReceita.value).subscribe(
      (sucesso) => {
        alert("Receita salva com sucesso");
      },
      (erro) => alert("Não foi possivel salvar a receita. Verifique se o json server esta ligado professor. Erro: "+JSON.stringify(erro))
    );
  }

  onEdit(id: number){

  }

  criarFormulario(receita: Receita) {
    this.formReceita = this.formBuilder.group({
      nome: [receita.nome],
      tempoPreparo: [receita.tempoPreparo],
      descricao: [receita.descricao],
      ingredientes: [receita.ingredientes],
      categoria: [receita.categoria],
      modoPreparo: [receita.modoPreparo]
    });
  }
}
