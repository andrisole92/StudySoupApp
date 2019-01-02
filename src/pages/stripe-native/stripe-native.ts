import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Stripe} from "@ionic-native/stripe";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

/**
 * Generated class for the StripeNativePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stripe-native',
  templateUrl: 'stripe-native.html',
})
export class StripeNativePage {

  cardForm: FormGroup;

  month: any = 5 ;
  year: any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public stripe: Stripe,
              private formBuilder: FormBuilder) {
    this.cardForm = this.formBuilder.group({
      cardNumber: ['', Validators.required],
      cardMonth: ['', Validators.required],
      cardYear: ['', Validators.required],
      cardCVV: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
    });
    window['c'] = this.month;
  }

  ionViewDidLoad() {
    this.stripe.setPublishableKey('pk_test_1RTaAyN3U9x043kFGSN6DXYL');
  }

  validateCard(){
    console.log(this.cardForm.value);
    // Run card validation here and then attempt to tokenise

    this.stripe.createCardToken(this.cardForm.value)
      .then(token => console.log(token))
      .catch(error => console.error(error));
  }

}
