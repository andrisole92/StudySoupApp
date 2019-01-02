import {BrowserModule} from '@angular/platform-browser';
import {enableProdMode, ErrorHandler, NgModule} from '@angular/core';
enableProdMode();
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ReactiveFormsModule} from "@angular/forms";
import {PaymentFormPage} from "../pages/payment-form/payment-form";
import {OnboardingPage} from "../pages/onboarding/onboarding";
import {ConfirmRequestPage} from "../pages/confirm-request/confirm-request";
import {RequestSentPage} from "../pages/request-sent/request-sent";
import {RequestStatusPage} from "../pages/request-status/request-status";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Http, HttpModule} from "@angular/http";
import {ComponentsModule} from "../components/components.module";
import {CoursesPage} from "../components/step2/course";
import {AutocompleteComponent} from "../components/autocomplete/autocomplete";
import { LocalStorageProvider } from '../providers/local-storage';
import {IonicStorageModule} from "@ionic/storage";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { Device } from '@ionic-native/device';
import {LocalNotifications} from "@ionic-native/local-notifications";
import {Keyboard} from "@ionic-native/keyboard";
import {StripeJavaScriptPage} from "../pages/stripe-java-script/stripe-java-script";
import {StripeNativePage} from "../pages/stripe-native/stripe-native";
import { Stripe } from '@ionic-native/stripe';
import { ServerInterfaceProvider } from '../providers/server-interface';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PaymentFormPage,
    OnboardingPage,
    ConfirmRequestPage,
    RequestSentPage,
    RequestStatusPage,
    StripeJavaScriptPage,
    StripeNativePage
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    ComponentsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PaymentFormPage,
    OnboardingPage,
    ConfirmRequestPage,
    RequestSentPage,
    RequestStatusPage,
    CoursesPage,
    AutocompleteComponent,
    StripeJavaScriptPage,
    StripeNativePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Device,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalStorageProvider,
    LocalNotifications,
    Keyboard,
    Stripe,
    ServerInterfaceProvider
  ]
})
export class AppModule {
}
