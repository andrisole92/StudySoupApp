import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LocalStorageProvider} from "../../providers/local-storage";
import {ConfirmBookingPage} from "../confirm-booking/confirm-booking";


@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.html',
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
    this.navCtrl.push(ConfirmBookingPage)
  }

}
