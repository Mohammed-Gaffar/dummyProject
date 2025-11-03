import { Component, OnInit } from '@angular/core';
import { productCategory } from '../interfaces/product';
import { ProductService } from '../services/product.service';
import { ɵInternalFormsSharedModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  imports: [ɵInternalFormsSharedModule, CommonModule, RouterLink],
})
export class CategoriesComponent implements OnInit {
  productsCategories!: productCategory[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.productService
      .getProductsCategories()
      .subscribe((res: productCategory[]) => {
        this.productsCategories = res;
      });
  }
}
