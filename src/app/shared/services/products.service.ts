import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
productsArray=[
  {
    pName:"samsung M-31",
    pId:1,
    pStatus:"In-Progress",
  },
  {
    pName:"samsung TV  LED ",
    pId:2,
    pStatus:"Dispatched",
  },
  {
    pName:"Iphone",
    pId:3,
    pStatus:"In-Progress",
  },
  {
    pName:"Sony Headphone",
    pId:4,
    pStatus:"Deliverd",
  }
]
  constructor() { }
  
  
}
