import { CartService } from './../Services/cart.service';
import { Product } from './../Models/product';
import { Component } from '@angular/core';
import { CartItem } from '../Models/cart-item';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public cartService: CartService ) {



  }




}
