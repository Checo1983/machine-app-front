import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LandingPageComponent } from "./landing-page/landing-page.component";
import { ProductListComponent } from "./products/product-list/product-list.component";
import { ProductDetailsComponent } from "./products/product-details/product-details.component";
import { NewbuyComponent } from "./newbuy/newbuy.component";
//import { ProfileComponent } from "./profile/profile.component";
//import { LoginComponent } from "./login/login.component";
//import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
    { path: "home", component: LandingPageComponent },
    { path: "new_buy", component: ProductListComponent },
    //{ path: "new_buy", component: ProductDetailsComponent },
  //{ path: "Devoluciones", component: EventListComponent },
  //{ path: "Cambio", component: ProfileComponent },
  //{ path: "Fidelización", component: LoginComponent },

  { path: "", redirectTo: "/home", pathMatch: "full" },
  //{ path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}