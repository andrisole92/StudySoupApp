import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BookingRequestedPage} from "../booking-requested/booking-requested";

/**
 * Generated class for the ConfirmRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-confirm-booking',
  templateUrl: 'confirm-booking.html',
})
export class ConfirmBookingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmRequestPage');
  }

  editBook(){
    if (this.navCtrl.canGoBack()){
      this.navCtrl.pop();
    }
  }
  submitBook(){
    this.navCtrl.push(BookingRequestedPage);
  }

}
