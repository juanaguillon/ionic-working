import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-newProduct',
  templateUrl: './newProduct.component.html',
  styleUrls: ['./newProduct.component.css']
})
export class NewProductComponent implements OnInit {
  currentProduct: Product = {
    id: null,
    name: ""

  };
  imageProduct = null;

  constructor(private productService: ProductService) { }
  ngOnInit() {
  }

  uploadImage($event) {
    this.imageProduct = $event.target.files[0];
  }

  uploadProduct() {
    this.productService.createProduct(this.currentProduct);
  }

}
