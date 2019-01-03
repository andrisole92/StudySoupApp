import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {StripeNativePage} from "../../pages/stripe-native/stripe-native";

@Component({
  selector: 'unlock-access',
  templateUrl: 'unlock-access.html'
})
export class UnlockAccessComponent {


  constructor(private navCtrl: NavController) {
  }

  goToOnboarding(){
    this.navCtrl.push(StripeNativePage)
  }

}
