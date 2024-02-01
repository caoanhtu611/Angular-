import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';

import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { ProductService } from '../../../../service/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, ToastModule, ConfirmDialogModule, ButtonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [MessageService, ConfirmationService],
})
export class ProductsComponent {
  productList: any = [];
  constructor(
    private productService: ProductService,
    // private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) {}

  getAll(): void {
    this.productService.getProductListAdmin().subscribe((products: any) => {
      console.log(products);
      this.productList = products.data;
    }); // callApi.then(cb fuc)
  }

  ngOnInit(): void {
    this.getAll();
  }
  // deleteProduct(id) : productService.deleteProductById(id)
  deleteProduct(id: string) {
    let check = confirm('do you want to delete this product!');
    if (check) {
      this.productService.deleteProductAdmin(id).subscribe((data: any) => {
        if (data.status === 0) {
          console.log(data);
          this.messageService.add({
            severity: 'success',

            detail: 'Delete Success',
          });
          this.getAll();
        }
      });
    }
  }
  editProduct(id: string) {
    return this.router.navigate([`/admin/products/${id}`]);
  }
  addProduct() {
    return this.router.navigate([`/admin/create`]);
  }
}

// 1. viết service
// 2. Update UI
// 3. Handle trong components
