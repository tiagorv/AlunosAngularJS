import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosListaComponent } from './alunos-lista/alunos-lista.component';


const routes: Routes = [
  { path: 'alunos', component: LayoutComponent, children:[
    { path: 'Form', component: AlunosFormComponent},
    { path: 'Form/:id', component: AlunosFormComponent},  
    { path: 'Lista', component: AlunosListaComponent},
    { path: '', redirectTo: '/alunos/Lista', pathMatch: 'full'} 
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
