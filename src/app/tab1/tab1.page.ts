import { Product } from './../Models/product';
import { Component } from '@angular/core';
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
  constructor() {
   this.mesSlides.push('../../assets/images/slide1.jpg');
   this.mesSlides.push('../../assets/images/slide2.jpg');
   this.mesSlides.push('../../assets/images/slide3.jpg');

    /*Ajout des produits*/
this.mesProduits.push( {title:'Robe', category:'Summer',price: 45, currency:'€',
 picture:'../../assets/images/slide1.jpg'});
this.mesProduits.push( {title:'Jeans', category:'Winter',price: 95, currency:'€',
picture:'../../assets/images/slide2.jpg'});
this.mesProduits.push( {title:'LEGO', category:'Child',price: 495, currency:'€',
picture:'../../assets/images/slide3.jpg'});
this.mesProduits.push( {title:'Arduino', category:'Electro',price: 45, currency:'€',
picture:'../../assets/images/slide1.jpg'});


  }

}
