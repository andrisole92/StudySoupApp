import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RequestSentPage} from "../request-sent/request-sent";

/**
 * Generated class for the ConfirmRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm-request',
  templateUrl: 'confirm-request.html',
})
export class ConfirmRequestPage {

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
    this.navCtrl.push(RequestSentPage);
  }

}
