import { CartService } from './../Services/cart.service';
import { Product } from './../Models/product';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { Toast } from '@capacitor/toast';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  mesSlides: any [] =[]  ;
  mesProduits:  Product[] = [];
  constructor(public cartService: CartService, private router: Router) {
   this.mesSlides.push('../../assets/images/slide1.jpg');
   this.mesSlides.push('../../assets/images/slide2.jpg');
   this.mesSlides.push('../../assets/images/slide3.jpg');

    /*Ajout des produits*/
this.mesProduits.push( {id:1,title:'Robe', category:'Summer',price: 45, currency:'€',
 picture:'../../assets/images/slide1.jpg'});
this.mesProduits.push( {id:2,title:'Jeans', category:'Winter',price: 95, currency:'€',
picture:'../../assets/images/slide2.jpg'});
this.mesProduits.push( {id:3,title:'LEGO', category:'Child',price: 495, currency:'€',
picture:'../../assets/images/slide3.jpg'});
this.mesProduits.push( {id:4,title:'Arduino', category:'Electro',price: 45, currency:'€',
picture:'../../assets/images/slide1.jpg'});


  }

  async addToCart(item)
  {
    console.log('add');
    console.log(item);
    const rep = this.cartService.addItem(item);

      if(rep)
      {
        this.router.navigate(['/tabs/tab2']);
      }
      else
      {
        await Toast.show({
          text: 'Unable to add item ',
          duration: 'long'
        });
      }

  }

}
