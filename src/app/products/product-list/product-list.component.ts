import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product";

import { ProductService } from "../../core/product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  onSelectProduct(product: Product) {
    this.selectedProduct = product;
  }

  getProducts() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
      this.selectedProduct = products[0];
    });
  }
}
