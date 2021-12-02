import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisciplinasService } from 'src/app/disciplinas.service';
import { Disciplina } from '../disciplina';

@Component({
  selector: 'app-disciplinas-lista',
  templateUrl: './disciplinas-lista.component.html',
  styleUrls: ['./disciplinas-lista.component.css']
})
export class DisciplinasListaComponent implements OnInit {

  disciplinas: Disciplina[] = [];
  disciplinaSelecionada: Disciplina;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(private servicoDisciplina: DisciplinasService,
              private minhaRota : Router) { }

  ngOnInit(): void {
      this.servicoDisciplina
        .getDisciplinas()
        .subscribe(respostaSucesso => {
            this.disciplinas = respostaSucesso;
        })
  }

  novoCadastro(){
      this.minhaRota.navigate(['/disciplinas/Form']);
  }

  preparaDelecao(disciplina: Disciplina){
      this.disciplinaSelecionada = disciplina;
  }

  deletarDisciplina(){
      this.servicoDisciplina
          .deletar(this.disciplinaSelecionada)
          .subscribe(respostaComSucesso => {
                this.mensagemSucesso = "Disciplina deleta com sucesso!";
                this.mensagemErro = null;
                this.ngOnInit();
          }, respostaComErro => {
                this.mensagemErro = 'Ocorreu um erro ao deletar a disciplina!';
                this.mensagemSucesso = null;
          })
  }

}
