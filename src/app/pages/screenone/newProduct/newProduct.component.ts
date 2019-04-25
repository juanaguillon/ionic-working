import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newProduct',
  templateUrl: './newProduct.component.html',
  styleUrls: ['./newProduct.component.css']
})
export class NewProductComponent implements OnInit {
  currentProduct: any = {};
  validatenew;
  constructor(
    private router: ActivatedRoute,
    private productService: ProductService
  ) {
    if (this.router.snapshot.params["id"] != "new") {
      this.validatenew = false;
      this.currentProduct.id = this.router.snapshot.params["id"];
      let cproduct = this.productService.getProductById(this.currentProduct.id);
      cproduct.subscribe(doc => {
        this.currentProduct = doc;
      })
    } else {
      this.validatenew = true;
    }
  }
  ngOnInit() {
  }
  uploadProduct(idup) {
    this.productService.updateProductById(idup, this.currentProduct);
  }
  newProduct() {
    this.productService.createProduct(this.currentProduct);
  }
}
