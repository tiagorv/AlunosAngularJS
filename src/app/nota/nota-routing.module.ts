import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { NotaFormComponent } from './nota-form/nota-form.component';
import { NotaListaComponent } from './nota-lista/nota-lista.component';

const routes: Routes = [
  {path: 'notas', component: LayoutComponent, children:[
  {path: 'Form', component: NotaFormComponent},
  {path: 'Form/:id', component: NotaFormComponent},
  {path: 'Lista', component: NotaListaComponent},
  { path: '', redirectTo: '/notas/Lista', pathMatch: 'full'}
  ]}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotaRoutingModule { }