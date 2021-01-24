import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styles: [
  ]
})
export class ListaProdutosComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { 
    this.produtos = [];
  }

  public produtos: Produto[];

  ngOnInit(): void {
    this.produtoService.obterProdutos()
      .subscribe(
        //sucesso
        produtosRetornados => {
          this.produtos = produtosRetornados;
          console.log(produtosRetornados);
        },
        //erro
        error => console.log(error)
      );
  }

}
