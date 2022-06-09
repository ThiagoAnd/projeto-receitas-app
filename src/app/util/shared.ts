import { Constants } from './constants';
import { Receita } from './../model/receita.model';

export class Shared {
  constructor() {}

  /**
	Cadastra um usuário default para funcionamento do login.
	Só realiza o cadastro caso o usuário ainda não esteja salvo no WebStorage.
*/
  public static initializeWebStorage(): void {




    localStorage.setItem(Constants.RECEITAS_KEY, JSON.stringify([]));

  }
}
