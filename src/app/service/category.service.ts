import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'https://apipro.netlify.app/.netlify/functions/api/category';
  constructor(private http: HttpClient) {}
  getCategory(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getOneCategory(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  deleteCategory(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  addCategory(Category: any) {
    return this.http.post(`${this.apiUrl}`, Category);
  }
  updateCategory(Category: any) {
    return this.http.put(`${this.apiUrl}/${Category.id}`, Category);
  }
}
