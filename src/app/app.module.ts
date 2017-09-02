import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ReadProductsComponent } from './read-products/read-products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ReadOneProductComponent } from './read-one-product/read-one-product.component';


@NgModule({
  declarations: [
    AppComponent,
    ReadProductsComponent,
    CreateProductComponent,
    ReadOneProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
