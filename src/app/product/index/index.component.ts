import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent {
  products: Product[] = [];

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe((data: Product[]) => {
      this.products = data;
      // console.log(this.products);
    });
  }

  deleteProduct(id: number) {
    this.productService.delete(id).subscribe((res) => {
      this.products = this.products.filter((item) => item.id !== id);
      console.log('Product deleted successfully!');
    });
  }
}
