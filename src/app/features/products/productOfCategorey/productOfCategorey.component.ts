import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { routes } from '../../../app.routes';
import { Product } from '../interfaces/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productOfCategorey',
  templateUrl: './productOfCategorey.component.html',
  styleUrls: ['./productOfCategorey.component.css'],
  imports: [CommonModule],
})
export class ProductOfCategoreyComponent implements OnInit {
  products: Product[] | any;
  private category: string | any;

  constructor(
    private ProductService: ProductService,
    private ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.category = this.ActivatedRoute.snapshot.paramMap.get('categoryName');

    this.loadCategoriesProduct(this.category);
  }

  loadCategoriesProduct(categoryName: string) {
    this.ProductService.getProductsByCategory(categoryName).subscribe(
      (data: Product[] | any) => {
        this.products = data;
      }
    );
  }

  viewDetails(id: number) {}
}
