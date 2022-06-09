import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/receita-home/receita-home.component';
import { ReceitaCreateComponent } from './view/receita-create/receita-create.component';
import { ReceitaListComponent } from './view/receita-list/receita-list.component';
import { ReceitaVisionComponent } from './view/receita-vision/receita-vision.component';

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
    component: ReceitaCreateComponent,
  },
  {
    path: 'visualizar/:id',
    component: ReceitaVisionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
