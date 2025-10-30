import { Component, inject, Injectable, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './interfaces/product';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.getall();
  }

  getall() {
    this.productService.getAll().subscribe((data: Product[] | any) => {
      this.products = data;
    });
  }

  viewDetails(prodId: number) {
    this.router.navigate(['products/details/', prodId]);
  }
}
