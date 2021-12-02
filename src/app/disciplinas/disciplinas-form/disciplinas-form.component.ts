import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DisciplinasService } from 'src/app/disciplinas.service';
import { Disciplina } from '../disciplina';

@Component({
  selector: 'app-disciplinas-form',
  templateUrl: './disciplinas-form.component.html',
  styleUrls: ['./disciplinas-form.component.css']
})
export class DisciplinasFormComponent implements OnInit {

  disciplina: Disciplina;
  sucesso: boolean = false;
  errosApi: string[];
  id: number;

  constructor(private servicoDisciplina: DisciplinasService,
            private minhaRota: Router,
            private informacoesUrl: ActivatedRoute) {
      this.disciplina = new Disciplina();
   }

  ngOnInit(): void {
      let params: Observable<Params> = this.informacoesUrl.params;
      params.subscribe(parametrosRecebidos =>{
          this.id = parametrosRecebidos['id'];
          if (this.id){
              this.servicoDisciplina
                  .getDisciplinaById(this.id)
                  .subscribe(respostaComSucesso => {
                      this.disciplina = respostaComSucesso;
                  }, respostaComErro => {
                      this.disciplina = new Disciplina();
                  })
          }
      }
      )
  }

  gravarDisciplina(){
      if(this.id){
        this.servicoDisciplina
        .atualizar(this.disciplina)
        .subscribe(respostaSucesso => {
              this.sucesso = true;
              this.errosApi = null;
              this.disciplina = respostaSucesso;
        }, respostaComErro =>{
              this.sucesso = false;
              this.errosApi = respostaComErro.error.erros;
        })                
      }else{
        this.servicoDisciplina
        .salvar(this.disciplina)
        .subscribe(respostaSucesso => {
              this.sucesso = true;
              this.errosApi = null;
              this.disciplina = respostaSucesso;
        }, respostaComErro =>{
              this.sucesso = false;
              this.errosApi = respostaComErro.error.erros;
        })        
      }
  }

  voltarParaListagem(){
    this.minhaRota.navigate(['/disciplinas/Lista']);
  }

}
