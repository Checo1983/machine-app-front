import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HttpClient } from '@angular/common/http';

// Modules
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { ProductsModule } from "./products/products.module";
import { NewBuyModule } from "./newbuy/new-buy.module";
import { AppRoutingModule } from "./app-routing.module";


// Components
import { AppComponent } from "./app.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ToolbarComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule,
    NewBuyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}