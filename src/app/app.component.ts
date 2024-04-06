import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mini-angular-ecom';
  
  isCartOpen: boolean = false;

  toggleCart(): void {
    this.isCartOpen = !this.isCartOpen;
  }
}
