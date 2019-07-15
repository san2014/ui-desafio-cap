import { Component, OnInit } from '@angular/core';

import { ClienteService } from './services/cliente-service';
import { ContaService } from './services/conta-service';

@Component({
  selector: 'cap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'ui-desafio-cap';

  clientes: any[] = [];

  conta: any = {cliente : {}};

  idCliente: number;

  valorSaque: number;

  valorDeposito: number;

  msgErro: string;
  
  constructor(
    private clienteService: ClienteService,
    private contaService: ContaService
    ) { }


  async ngOnInit() {
    
    this.clientes = await this.clienteService.listar();

  }

  public changeCliente(event) {

    this.idCliente = event.target.value;

  }

  public async acessarConta() {
    
    if (this.idCliente) {
      
      try {
        
        this.msgErro = null;

        this.conta = await this.contaService.obter(this.idCliente);
        
        this.initValores()
        
      } catch (error) {

        this.handleError(error);
        
      }
    }

  }

  public async saque() {

    
    if(this.valorSaque) {
      
      try {
        
        this.msgErro = null;

        this.conta = await this.contaService.saque(this.conta, this.valorSaque);

        this.valorSaque = null;
        
      } catch (error) {

        this.handleError(error);
        
      }
    }


  }

  public async deposito() {
    
    if (this.valorDeposito) {
      
      this.msgErro = null;

      try {
        
        this.conta = await this.contaService.deposito(this.conta, this.valorDeposito);

      } catch (error) {

        this.handleError(error);
        
      }

    }
    
  }  

  private handleError(error: any) {

    try {
      
      this.msgErro = error.error.titulo;

    } catch (error) {
      
      this.msgErro = 'Ocorreu um erro na operação...';
      
    }

  }


  private initValores() {
    this.valorSaque = null;
    this.valorDeposito = null;
  }

}
