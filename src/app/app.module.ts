import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { AlunosModule } from './alunos/alunos.module';
import { AlunosService } from './alunos.service';
import { DisciplinasModule } from './disciplinas/disciplinas.module';
import { DisciplinasService } from './disciplinas.service';
import { NotaModule } from './nota/nota.module';
import { NotaService } from './nota.service';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    TemplateModule,
    AlunosModule,
    DisciplinasModule,
    NotaModule
  ],
  providers: [
    AlunosService,
    DisciplinasService,
    NotaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
