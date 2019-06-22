import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//Modules
import { SharedModule } from "../shared/shared.module";

// Components
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [ProductListComponent, ProductDetailsComponent]
})
export class ProductsModule {}
