import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LaunchNavigator, LaunchNavigatorOptions} from "../../../../Testr/node_modules/@ionic-native/launch-navigator";

@Component({
  selector: 'page-booking-status',
  templateUrl: 'booking-status.html',
})
export class BookingStatusPage {

  tip = "Will be wearing a green jacket Will be wearing a green jacket Will be wearing a green jacket Will be wearing a green jacket";
  ava = "assets/imgs/icon.png";

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private launchNavigator: LaunchNavigator) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestStatusPage');
  }

  updatedInfo(){
    if (this.navCtrl.canGoBack()){
      this.navCtrl.pop();
    }
  }

  openMap(){
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
