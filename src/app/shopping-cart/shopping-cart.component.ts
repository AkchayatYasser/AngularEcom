import { Component, EventEmitter, Output } from '@angular/core';
import { CartService } from '../products/cart.service';
import { Product } from '../products/product.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  cartItems: Product[] = [];
  @Output() toggleCart: EventEmitter<void> = new EventEmitter<void>();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  increaseQuantity(item: Product): void {
    item.quantity++;
  }

  decreaseQuantity(item: Product): void {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  removeItem(item: Product): void {
    this.cartService.removeItem(item);
    this.cartItems = this.cartService.getCartItems();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }
  calculateTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}