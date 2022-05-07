import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Receita } from '../model/receita.model';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  private readonly API = environment.API;

  constructor(private http: HttpClient) { }

  //TODO Fazer unsubscribe depois
   create(receita: Receita){
    return this.http.post(`${this.API}/receitas`,receita);
  }


}
