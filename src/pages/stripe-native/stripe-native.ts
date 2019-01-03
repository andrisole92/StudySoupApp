import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Stripe} from "@ionic-native/stripe";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OnboardingPage} from "../onboarding/onboarding";

/**
 * Generated class for the StripeNativePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-stripe-native',
  templateUrl: 'stripe-native.html',
})
export class StripeNativePage {

  cardForm: FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public stripe: Stripe,
              private formBuilder: FormBuilder) {
    this.cardForm = this.formBuilder.group({
      cardNumber: ['', Validators.required],
      cardMonth: ['', Validators.required],
      cardYear: ['', Validators.required],
      cardCVV: ['', Validators.compose([Validators.maxLength(3),  Validators.required])],
      month: [0, Validators.required],
      year: [0, Validators.required]
    });
    window['c'] = this.cardForm;
  }

  ionViewDidLoad() {
    this.stripe.setPublishableKey('pk_test_1RTaAyN3U9x043kFGSN6DXYL');
  }

  validateCard() {
    this.navCtrl.push(OnboardingPage)
    // this.stripe.createCardToken(this.cardForm.value)
    //   .then(token => console.log(token))
    //   .catch(error => console.error(error));
  }

  // DateTime Bug does not set month
  monthChanged(e) {
    let {month} = e;
    month = month < 10 ? '0' + month.toString() : month;
    this.cardForm.controls['month'].setValue(month);
  }

}
