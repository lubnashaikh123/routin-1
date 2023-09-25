import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproducts } from 'src/app/shared/models/user';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productId ! : number;
  productObj ! :Iproducts; 
  constructor(private _route :ActivatedRoute,
              private _productService:ProductsService 
    ) { }

  ngOnInit(): void {
    console.log(this._route.snapshot.params)
    
    this._route.params
    .subscribe((params : Params)=>{
      this.productId= +params['productId']
      this.productObj=this._productService.getsingleProduct(this.productId)
    })
  } 
  }
