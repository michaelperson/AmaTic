import { Product } from './../Models/product';
import { Component } from '@angular/core';
import { CartItem } from '../Models/cart-item';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  items: CartItem[] = [];
  totalPrice=0;
  totalCartQty=0;
  constructor() {
    this.additem({product: {title:'Robe', category:'Summer',price: 45, currency:'€',
    picture:'../../assets/images/slide1.jpg'}, qty:1});
    this.additem({product: {title:'Jeans', category:'Winter',price: 95, currency:'€',
    picture:'../../assets/images/slide2.jpg'}, qty:2});


  }

  additem(item: CartItem)
  {
    console.log(item);
     this.items.push(item);
     this.totalCartQty+=item.qty;
     this.totalPrice+=(item.qty*item.product.price);
     console.log(this.items);
  }

}
