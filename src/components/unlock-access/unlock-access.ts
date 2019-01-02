import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {OnboardingPage} from "../../pages/onboarding/onboarding";

@Component({
  selector: 'unlock-access',
  templateUrl: 'unlock-access.html'
})
export class UnlockAccessComponent {


  constructor(private navCtrl: NavController) {
  }

  goToOnboarding(){
    this.navCtrl.push(OnboardingPage)
  }

}
