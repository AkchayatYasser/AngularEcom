import { Component, OnInit, } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { CartService } from './cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  

  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchQuery: string = '';
  selectedProduct: Product | null = null;
  cartItems: Product[] = [];

  

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getProducts()
      .subscribe(products => {
        this.products = products;
        this.filteredProducts = this.products;
      });
  }

  applyFilter(): void {
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  toggleProductDetails(product: Product | null): void {
    this.selectedProduct = this.selectedProduct === product ? null : product;
  }
  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
