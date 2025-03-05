import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SelectComponent } from './components/select/select.component';
import { SortComponent } from './components/sort/sort.component';
import { ButtonComponent } from './components/button/button.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoadingService } from './services/loadings/loading.service';

const Component = [
  ProductsComponent,
  CartItemComponent,
  SelectComponent,
  SortComponent,
  ButtonComponent
]

const Module = [
  CommonModule,
  IonicModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule
]

const providers = [
  LoadingService
]


@NgModule({
  declarations: [... Component],
  imports: [
    ... Module
  ],
  providers: [...providers],
  exports: [... Module, ... Component]
})
export class SharedModule { }
