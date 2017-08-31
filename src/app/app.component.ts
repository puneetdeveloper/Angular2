import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';
@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})

export class AppComponent {
   // properties for child components
   title="Read Products";

   // properties used to identify what views to show
  // show_read_products_html=true;
  show_read_products_html=true;
}