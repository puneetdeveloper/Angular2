import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs/Observable';
import { Product } from '../product';
 
@Component({
    selector: 'app-read-products',
    templateUrl: './read-products.component.html',
    styleUrls: ['./read-products.component.css'],
    providers: [ProductService]
    
})
 
export class ReadProductsComponent implements OnInit {
 
    // store list of products
    products: Product[];
   

 
    // initialize productService to retrieve list products in the ngOnInit()
    constructor(private productService: ProductService){}
    @Output() show_create_product_event=new EventEmitter();
    @Output() show_read_one_product_event=new EventEmitter();
    @Output() show_update_product_event=new EventEmitter();
    @Output() show_delete_product_event=new EventEmitter();
    // methods that we will use later
   // when user clicks the 'create' button
createProduct(){
    // tell the parent component (AppComponent)
    this.show_create_product_event.emit({
        title: "Create Product"
    });
}
    // when user clicks the 'read' button
readOneProduct(id){
    alert("dfgdfg");
    console.log('rp comp readOneProduct');
    // tell the parent component (AppComponent)
    this.show_read_one_product_event.emit({
        product_id: id,
        title: "Read One Product"
    });
}
    updateProduct(id){}
    deleteProduct(id){}
 
    // Read products from API.
    ngOnInit(){
        this.productService.readProducts()
            .subscribe(products =>{
              console.log(products);
              this.products=products['records']
            },
            error => console.log(error)
              
                
             
            );
    }
}