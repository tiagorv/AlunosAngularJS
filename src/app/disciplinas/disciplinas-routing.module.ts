import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { DisciplinasFormComponent } from './disciplinas-form/disciplinas-form.component';
import { DisciplinasListaComponent } from './disciplinas-lista/disciplinas-lista.component';

const routes: Routes = [
  { path: 'disciplinas', component: LayoutComponent, children:[  
  { path: 'Form', component: DisciplinasFormComponent},
  { path: 'Form/:id', component: DisciplinasFormComponent},  
  { path: 'Lista', component: DisciplinasListaComponent},
  { path: '', redirectTo: '/disciplinas/Lista', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisciplinasRoutingModule { }