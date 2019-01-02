import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LocalStorageProvider} from "../../providers/local-storage";
import {ConfirmRequestPage} from "../confirm-request/confirm-request";
import {style, state, animate, transition, trigger} from '@angular/animations';

/**
 * Generated class for the OnboardingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.html',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity: 0}),
        animate(200, style({opacity: 1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(200, style({opacity: 0}))
      ])
    ])
  ]
})
export class OnboardingPage {

  stepNumber: number = 1;
  courseCount: number = 0;
  schoolForm: FormGroup;
  coursesForm: FormGroup[] = [];
  sessForm: FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
              private localStorage: LocalStorageProvider) {
    this.schoolForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnboardingPage');
  }

  nextStep() {
    this.goToStep(this.stepNumber + 1);
  }

  getCourses() {
    let allValid = true;
    let courses = [];
    for (let i = 0; i < this.coursesForm.length; i++) {
      let form = this.coursesForm[i];
      if (form.valid) {
        courses.push(form.value);
      } else {
        allValid = false;
        break;
      }
    }
    return allValid ? courses : false;
  }

  prevStep() {
    if (this.stepNumber > 1) {
      this.stepNumber--;
    }
  }

  goToStep(n: number) {
    switch (n) {
      case 1:
        if (this.schoolForm.valid) {
          this.localStorage.school = this.schoolForm.value;
          this.stepNumber = 1;
        }
        break;
      case 2:
        if (this.schoolForm.valid) {
          this.localStorage.school = this.schoolForm.value;
          this.stepNumber = 2;
        }
        break;
      case 3:
        const courses = this.getCourses();
        if (courses) {
          this.localStorage.courses = courses;
          this.stepNumber = 3;
        }
        break;
      default:
        break;
    }
  }

  goToConfirm() {
    this.navCtrl.push(ConfirmRequestPage)
  }

}
