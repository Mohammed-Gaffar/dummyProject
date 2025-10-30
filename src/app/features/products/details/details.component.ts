import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  imports: [CommonModule],
})
export class DetailsComponent implements OnInit {
  productId!: string | any;
  product!: Product;

  constructor(
    private ProductService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.getProductInfo(this.productId);
  }

  getProductInfo(prodId: number) {
    this.ProductService.getById(prodId).subscribe(
      (res: Product) => (this.product = res)
    );
  }
}
