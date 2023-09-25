import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./shared/component/dashboard/dashboard.component";
import { ProuductsComponent } from "./shared/component/prouducts/prouducts.component";
import { UsersComponent } from "./shared/component/users/users.component";
import { PageNotfoundComponent } from "./shared/component/page-notfound/page-notfound.component";
import { UserComponent } from "./shared/component/users/user/user.component";
import { ProductComponent } from "./shared/component/prouducts/product/product.component";

const routes :Routes=[
    {
      path:"",component:DashboardComponent,
    },
    {
      path:"home",component:DashboardComponent,
    },
    {
      path:"users",component:UsersComponent,
    },
    {
       path:"users/:userId",component:UserComponent
    },
    {
      path:"products",component:ProuductsComponent,
    },
    {
      path:"products/:productId",component:ProductComponent,
    },
     {
      path:"page-not-found",component:PageNotfoundComponent,  
     },
    {
      path:"**",
      redirectTo:"page-not-found",
    }
  ]
 
 @NgModule({
        imports:[
            RouterModule.forRoot(routes)
        ],
    exports:[
        RouterModule
    ]
 })
 export class AppRoutingModule{

 }

