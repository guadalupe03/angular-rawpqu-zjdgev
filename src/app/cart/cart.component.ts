import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'; //ayuda a crear formas
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
//export class CartComponent implements OnInit {    //marca error con OnInit
export class CartComponent {
  
  items; 
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private route: Router,
  ) { 
       this.items = this.cartService.getItems(); 
       this.checkoutForm = this.formBuilder.group({ 
        name: '', 
        address: '' 
       }); 

  }

  onSubmit(customerData) { 
    // Process checkout data here 
    //console.warn('Your order has been submitted', customerData); 
    window.alert('Your order has been submitted'); 

    this.route.navigate(['cart']);
   
    this.items = this.cartService.clearCart(); 
    this.checkoutForm.reset(); 
  } 

}