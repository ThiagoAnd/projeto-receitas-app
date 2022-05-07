import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/receita-home/receita-home.component';
import { ReceitaCreateComponent } from './view/receita-create/receita-create.component';
import { ReceitaListComponent } from './view/receita-list/receita-list.component';
import { ReceitaUpdateComponent } from './view/receita-update/receita-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'receita/create',
    component: ReceitaCreateComponent,
  },
  {
    path: 'receita/list',
    component: ReceitaListComponent,
  },
  {
    path: 'editar/:id',
    component: ReceitaUpdateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
