import { CarrinhoService } from './../../carrinho.service';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/produtos.service';
import { IProduto, IProdutoCarrinho } from '../produtos';
import { ActivatedRoute } from '@angular/router';
import { NotificacaoService } from 'src/app/notificacao.service';

@Component({
  selector: 'app-detalhes-produtos',
  templateUrl: './detalhes-produtos.component.html',
  styleUrls: ['./detalhes-produtos.component.css']
})
export class DetalhesProdutosComponent implements OnInit {
  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificaoService: NotificacaoService, 
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get("id"));
    this.produto = this.produtosService.getOne(productId);
  }

  adicionarAoCarrinho() {
    this.notificaoService.notificar("O produto foi adicionado ao carrinho");
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade

    }
    this.carrinhoService.adicionarAoCarrinho(produto);

  }

}
