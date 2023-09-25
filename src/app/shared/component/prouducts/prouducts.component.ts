import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Iproducts } from '../../models/user';

@Component({
  selector: 'app-prouducts',
  templateUrl: './prouducts.component.html',
  styleUrls: ['./prouducts.component.scss']
})
export class ProuductsComponent implements OnInit {
  productsInfo:Array<Iproducts>=[]
  productsArray: any;
  constructor(private _productsservice:ProductsService) { }

  ngOnInit(): void {  
    this.productsInfo=this._productsservice.getAllProducts()
  }
}
