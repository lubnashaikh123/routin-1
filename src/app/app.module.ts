import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { UsersComponent } from './shared/component/users/users.component';
import { ProuductsComponent } from './shared/component/prouducts/prouducts.component';
import { AppRoutingModule } from './aap-routing.module';
import { PageNotfoundComponent } from './shared/component/page-notfound/page-notfound.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { UserComponent } from './shared/component/users/user/user.component';
import { ProductComponent } from './shared/component/prouducts/product/product.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    ProuductsComponent,
    PageNotfoundComponent,
    NavbarComponent,
    UserComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
