import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Cart } from '../models/cart';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private selectedUser!: User;
  private cartList: Cart[] = [];
  constructor() {}

  getSelectedUser(): User | undefined {
    return this.selectedUser;
  }
  setSelectedUser(user: User) {
    this.selectedUser = user;
    if (this.getUserCart() == undefined) {
      this.cartList;
      this.cartList.push({
        userId: user.id,
        id: this.cartList.length + 1,
        items: [],
      });
      localStorage.setItem('list', JSON.stringify(this.cartList));
    }
  }
  getUserCart(): Cart | undefined {
    return this.cartList.find((cart) => cart.userId == this.selectedUser.id);
  }
  addProductInCart(product: Product) {
    let cart = this.getUserCart();
    if (cart == undefined) {
      return;
    }
    let cartItem = cart.items.find((item) => item.productId == product.id);
    if (cartItem == undefined) {
      cartItem = {
        cartId: cart.id,
        productId: product.id,
        count: 0,
        productName: product.name,
        price: product.price,
        image: product.image.medium,
      };
      cart.items.push(cartItem);
    }
    cartItem.count++;
    localStorage.setItem('list', JSON.stringify(this.cartList));

    // this.notifierService.notify('Added product',product.name+' added in cart');
  }
}
