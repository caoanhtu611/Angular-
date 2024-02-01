import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductCartComponent } from '../../components/product-cart/product-cart.component';
import { NgFor } from '@angular/common';
import { ProductService } from '../../service/products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ProductCartComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  productService = inject(ProductService);
  productList: any = [];
  // ngOnInit(): void {
  //   this.productService
  //     .getProductList()
  //     .subscribe((products: any) => (this.productList = products.data));
  // }
}
