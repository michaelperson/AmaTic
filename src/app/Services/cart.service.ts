import { CartItem } from './../Models/cart-item';
import { Product } from './../Models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: CartItem[] = [];
  item: CartItem;
  totalPrice= 0;
  totalCartQty=0;
  constructor() { }

  addItem(product: Product): boolean
  {
    /*Vérifier si le produit est déjà dans notre panier*/
try {
  if(this.isPresent(product.id))
    {
      this.addNewItem(product);
    }
    else
    {
      this.updateItem(product);
    }

    this.calcul();
    return true;
    } catch (error) {
      console.log(error);
      return false;
    }

  }

  isPresent(id: number)
  {
    return this.items.find(x=>x.product.id=id)=== undefined;
  }

  private addNewItem(prod: Product)
  {
    this.items.push({product: prod, qty:1});
  }

  private updateItem(prod: Product)
  {
    console.log(prod);
    console.log(this.items);
    const ci: CartItem = this.items.find(x=>x.product.id=prod.id);
    ci.qty+=1;
  }

  private calcul()
  {
    this.totalCartQty=0;
    this.totalPrice=0;
    this.items.forEach(element => {
      this.totalCartQty+= element.qty;
      this.totalPrice+=(element.qty*element.product.price);
    });


  }
}
