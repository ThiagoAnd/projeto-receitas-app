import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Receita } from '../model/receita.model';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  private readonly API = environment.API;

  constructor(private http: HttpClient) { }

  private create(receita: Receita){
    return this.http.post(this.API,receita);
  }
}
