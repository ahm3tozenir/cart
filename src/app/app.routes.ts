import { Routes } from '@angular/router';
import { ProductComponent } from '../components/product/product.component';
import { CartComponent } from '../components/cart/cart.component';
import { UserComponent } from '../components/user/user.component';

export const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'user', component: UserComponent },
  { path: 'cart', component: CartComponent },
];
