import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScreenonePage } from './screenone.page';

// Componentes
import { UpdateProductsComponent } from './updateProducts/updateProducts.component'
import { NewProductComponent } from './newProduct/newProduct.component';

const routes: Routes = [
  {
    path: '',
    component: ScreenonePage
  },
  {
    path:'updateproducts',
    component: UpdateProductsComponent
  },
  {
    path:'newproduct/:id',
    component: NewProductComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ScreenonePage,
    UpdateProductsComponent,
    NewProductComponent
  ]
})
export class ScreenonePageModule {}
