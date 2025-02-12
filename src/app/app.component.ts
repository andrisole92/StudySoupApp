import {Component} from '@angular/core';
import {Keyboard, NavController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {TranslateService} from '@ngx-translate/core';
import {LocalNotifications} from "@ionic-native/local-notifications";
import {StripeJavaScriptPage} from "../pages/stripe-java-script/stripe-java-script";
import {StripeNativePage} from "../pages/stripe-native/stripe-native";
import {ServerInterfaceProvider} from "../providers/server-interface";
import {OnboardingPage} from "../pages/onboarding/onboarding";
import {BookingStatusPage} from "../pages/booking-status/booking-status";
import {BookingRequestedPage} from "../pages/booking-requested/booking-requested";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(private platform: Platform,
              private statusBar: StatusBar,
              private splashScreen: SplashScreen,
              private translate: TranslateService,
              private keyboard: Keyboard,
              private localNotif: LocalNotifications,
              private serverInterface: ServerInterfaceProvider) {
    window['platform'] = this.platform;
    window['statusBar'] = this.statusBar;
    window['splashScreen'] = this.splashScreen;
    window['translate'] = this.translate;
    window['keyboard'] = this.keyboard;
    window['local'] = this.localNotif;
    translate.setDefaultLang('en');
    platform.ready().then(() => {
      this.keyboard.hideFormAccessoryBar(true);
      this.keyboard.hideFormAccessoryBar(false);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

