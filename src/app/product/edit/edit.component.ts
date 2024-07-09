import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  id!: number;
  product!: Product;
  form!: FormGroup;

  constructor(
    public productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['productId'];
    this.productService.find(this.id).subscribe((data: Product) => {
      this.product = data;
      this.form = new FormGroup({
        name: new FormControl(this.product.name, [Validators.required]),
        price: new FormControl(this.product.price, Validators.required),
        quantity: new FormControl(this.product.quantity, Validators.required),
      });
    });
  }

  get fc() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.productService
      .update(this.id, this.form.value)
      .subscribe((res: any) => {
        console.log('Product updated successfully!');
        this.router.navigateByUrl('products');
      });
  }
}
