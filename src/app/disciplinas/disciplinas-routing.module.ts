import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisciplinasFormComponent } from './disciplinas-form/disciplinas-form.component';
import { DisciplinasListaComponent } from './disciplinas-lista/disciplinas-lista.component';

const routes: Routes = [
  { path: 'disciplinasForm', component: DisciplinasFormComponent},
  { path: 'disciplinasForm/:id', component: DisciplinasFormComponent},  
  { path: 'disciplinasLista', component: DisciplinasListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisciplinasRoutingModule { }
