import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Receita } from '../../model/receita.model';

@Component({
  selector: 'app-receita-create',
  templateUrl: './receita-create.component.html',
  styleUrls: ['./receita-create.component.css'],
})
export class ReceitaCreateComponent implements OnInit {
  formReceita!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  pageTitle = 'Pagina de criação';

  ngOnInit() {
    this.criarFormulario(new Receita());
  }

  onSubmit() {
    console.log('entrou');
    console.log(this.formReceita.value);
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
