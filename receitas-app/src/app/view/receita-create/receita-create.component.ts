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
  nome: string = '';
  ngOnInit() {
    this.criarFormulario(new Receita());
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log("entrou")
    console.log(this.formReceita.value);
  }

criarFormulario(receita: Receita) {
    this.formReceita = this.formBuilder.group({
      nome: [receita.nome]
    });
  }
}
