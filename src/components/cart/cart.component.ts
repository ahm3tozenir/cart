import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  count: number = 1;
  constructor(
    public cartService: CartService,
    public productService: ProductService,
    public userService: UserService
  ) {}

  increase(id: number) {
    return this.cartService.getUserCart()?.items.forEach((item) => {
      if (item.productId == id) {
        item.count++;
      }
    });
  }
  decrease(id: number) {
    return this.cartService.getUserCart()?.items.forEach((item) => {
      if (item.productId == id && item.count > 0) {
        item.count--;
      } else {
        let index = this.cartService
          .getUserCart()
          ?.items.findIndex((e) => e.productId == id);
        this.cartService.getUserCart()?.items.splice(index ? index : 0, 1);
      }
    });
  }
}
