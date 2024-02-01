import { Injectable, inject } from '@angular/core'; // inject
import { HttpClient } from '@angular/common/http'; // HttpClient
import { Product, ProductAdmin } from '../types/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // call api
  apiUrl =
    'https://dynamic-semifreddo-8c4704.netlify.app/.netlify/functions/api/product';

  http = inject(HttpClient); // inject bien http
  constructor() {}

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductListAdmin(): Observable<ProductAdmin[]> {
    return this.http.get<ProductAdmin[]>(this.apiUrl);
  }
  getOneProduct(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  deleteProductAdmin(id: string): Observable<ProductAdmin[]> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
  addProductAdmin(product: any) {
    return this.http.post(`${this.apiUrl}`, product);
  }
  editProduct(product: any) {
    return this.http.put(`${this.apiUrl}/${product.id}`, product);
  }
}
