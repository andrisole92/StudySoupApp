import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

/**
 * Generated class for the PaymentFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment-form',
  templateUrl: 'payment-form.html',
})
export class PaymentFormPage {
  private card: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.card = this.formBuilder.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      cvc: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentFormPage');
  }

  logForm() {
    console.log(this.card.value)
  }

}
