import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public carrinhoService: CarrinhoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  

}
