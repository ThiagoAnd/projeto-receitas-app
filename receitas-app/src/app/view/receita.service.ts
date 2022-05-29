import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Receita } from '../model/receita.model';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { WebStorageUtil } from '../util/web-storage-util';
import { Constants } from '../util/constants';

@Injectable({
  providedIn: 'root',
})
export class ReceitaService {
  private readonly API = environment.API;
  receitas!: Receita []

  constructor(private http: HttpClient) {}

  //Com o take 1, a partir da ida e volta do servidor , ja finaliza o observable e não precisa fazer unsubscribe

  create(receita: Receita) {
    return this.http.post(`${this.API}/receitas`, receita);
  }

  createWithPromise(receita: Receita):Promise<Receita> {
    return this.http.post<Receita>(`${this.API}/receitas`, receita).toPromise();
  }

  list() {
    return this.http.get<Receita[]>(`${this.API}/receitas`);
  }

  saveOnWebStorage(receita: Receita) {
    this.receitas = WebStorageUtil.get(Constants.RECEITAS_KEY);
    this.receitas.push(receita);
    WebStorageUtil.set(Constants.RECEITAS_KEY, this.receitas);
  }

  getReceitasOnWebStorage(): Receita[] {
    this.receitas = WebStorageUtil.get(Constants.RECEITAS_KEY);
    return this.receitas;
  }

  getReceita(id: number){
    return this.http.get<Receita>(`${this.API}/receitas/${id}`).pipe(take(1))
  }

  remove(id: number){
    return  this.http.delete(`${this.API}/receitas/${id}`).pipe(take(1))
  }
}
