import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-updateproducts',
  templateUrl: './updateproducts.component.html',
  styleUrls: ['./updateproducts.component.css']
})

export class UpdateProductsComponent implements OnInit {

  products = []
  constructor( private product:ProductService ) {
    this.product.getAllProducts( ).pipe(

      map( product => {
        return product.map( product  => {
          return product.payload.doc.data();
        })
      } )
      
    )
    .subscribe( products => {
      this.products = products;
    } );
  }

  ngOnInit() {
  }

  

}