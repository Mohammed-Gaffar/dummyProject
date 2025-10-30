// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http
      .get<{ products: Product[] }>(this.apiUrl)
      .pipe(map((res) => res.products));
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`).pipe();
  }

  search(query: string): Observable<Product[]> {
    return this.http
      .get<{ products: Product[] }>(`${this.apiUrl}/search?q=${query}`)
      .pipe(map((res) => res.products));
  }

  create(product: Partial<Product>): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/add`, product);
  }

  update(id: number, product: Partial<Product>): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
