import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {LaunchNavigator, LaunchNavigatorOptions} from "../../../../Testr/node_modules/@ionic-native/launch-navigator";

@Component({
  selector: 'page-booking-status',
  templateUrl: 'booking-status.html',
})
export class BookingStatusPage {

  tip = "Will be wearing a green jacket Will be wearing a green jacket Will be wearing a green jacket Will be wearing a green jacket";
  ava = "assets/imgs/icon.png";

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private launchNavigator: LaunchNavigator,
              private plt: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestStatusPage');
  }

  updatedInfo() {
    if (this.navCtrl.canGoBack()) {
      this.navCtrl.pop();
    }
  }

  openMap() {
    if (this.plt.is('core')) {
      window.open('https://maps.google.com/maps?saddr=toronto&daddr=ottawa', '_system');
    } else {
      let options: LaunchNavigatorOptions = {
        start: 'London, ON',
      };
      this.launchNavigator.navigate('Toronto, ON', options)
        .then(
          success => console.log('Launched navigator'),
          error => console.log('Error launching navigator', error)
        );
    }
  }

  addToNativeCalendar() {
  }

}
