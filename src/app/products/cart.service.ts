import { Injectable } from '@angular/core';
import { Product } from './product.model';


@Injectable({
    providedIn: 'root'
  })
  export class CartService {
    cartItems: Product[] = [];
  
    constructor() { }
  
    addToCart(product: Product) {
      let item = this.cartItems.find(item => item.id === product.id);
      if (item) {
        item.quantity++; // If the item already exists in the cart, increment its quantity
      } else {
        product.quantity = 1; // Set the initial quantity to 1
        this.cartItems.push(product);
      }
    }
  
    removeItem(product: Product) {
      this.cartItems = this.cartItems.filter(item => item.id !== product.id);
    }
  
    clearCart() {
      this.cartItems = [];
    }
  
    getCartItems() {
      return this.cartItems;
    }
  }