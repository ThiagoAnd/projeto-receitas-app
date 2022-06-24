import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Receita } from '../model/receita.model';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReceitaService {
  private readonly API = environment.API;
  receitas!: Receita[];

  constructor(private http: HttpClient) {}

  //Com o take 1, a partir da ida e volta do servidor , ja finaliza o observable e não precisa fazer unsubscribe

  create(receita: Receita) {
    return this.http.post(`${this.API}/receitas`, receita).pipe(take(1));
  }

  update(receita: Receita) {
    return this.http
      .put(`${this.API}/receitas/${receita.id}`, receita)
      .pipe(take(1));
  }

  save(receita: Receita) {
    if (receita.id) return this.update(receita);
    return this.create(receita);
  }

  list() {
    return this.http.get<Receita[]>(`${this.API}/receitas`);
  }

  getReceita(id: number) {
    return this.http.get<Receita>(`${this.API}/receitas/${id}`).pipe(take(1));
  }

  remove(id: number) {
    return this.http.delete(`${this.API}/receitas/${id}`).pipe(take(1));
  }
}
