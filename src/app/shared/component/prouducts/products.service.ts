import { Injectable } from '@angular/core';
import { Iproducts } from '../../models/user';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
productsArray:Array<Iproducts>=[
  {
    pName:"samsung M-31",
    pId:1,
    pStatus:"In Progress",
  },
  {
    pName:"samsung TV LED",
    pId:2,
    pStatus:"Dispatched",
  },
  {
    pName:"Iphone-14",
    pId:3,
    pStatus:"In Progress",
  },
  {
    pName:"Sony Headphone",
    pId:4,
    pStatus:"Deleiverd",
  }
 
  
];
  constructor() { }
  
  getAllProducts():Array<Iproducts>{
    return this.productsArray
  }
  getsingleProduct(id : number):Iproducts{
   return this.productsArray.find(prod => prod.pId === id)!
  }
}
