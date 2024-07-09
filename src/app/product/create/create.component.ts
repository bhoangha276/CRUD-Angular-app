import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  form!: FormGroup;

  constructor(public productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
    });
  }

  get fc() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.productService.create(this.form.value).subscribe((res: any) => {
      console.log('Product created successfully!');
      this.router.navigateByUrl('products');
    });
  }
}
