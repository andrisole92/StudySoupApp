import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RequestStatusPage} from "../request-status/request-status";
import {LocalStorageProvider} from "../../providers/local-storage";
import {LocalNotifications} from '@ionic-native/local-notifications';

/**
 * Generated class for the RequestSentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request-sent',
  templateUrl: 'request-sent.html',
})
export class RequestSentPage {
  private contactForm: FormGroup;
  private user: any;
  private push: false;
  private firstToggle: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
              private localStorage: LocalStorageProvider,
              private localNotifications: LocalNotifications) {
    this.contactForm = this.formBuilder.group({
      phone: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  async ionViewDidLoad() {
    this.user = await this.localStorage.user || {};
    if (this.user) this.contactForm.controls['email'].setValue(this.user.email);
  }

  goToStatus() {
    if (this.contactForm.valid) {
      this.user.phone = this.contactForm.value.phone;
      this.user.push = this.push;
      this.localStorage.user = this.user;
      this.navCtrl.push(RequestStatusPage)
    }
  }

  onToggle(v) {
    if (this.firstToggle && v) {
      this.firstToggle = false;
      this.requestNotifications();
    }
  }

  async requestNotifications() {
    console.log('requestNotifications');
    try {
      let hasPermission = await this.localNotifications.hasPermission();
      console.log('hasPermission: ' + hasPermission);
      if (!hasPermission) {
        let granted = await this.localNotifications.requestPermission();
        console.log('permissionGranted: ' + granted);
      }
    } catch (err) {
      console.log(err)
    }
  }

}
