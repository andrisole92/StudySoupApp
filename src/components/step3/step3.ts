import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LocalStorageProvider} from "../../providers/local-storage";

interface AlertOpts {
  title: string,
  subTitle?: string
}

@Component({
  selector: 'step3',
  templateUrl: 'step3.html'
})
export class Step3Component {
  @Input() form: FormGroup;

  courseAlertOpts: AlertOpts;
  durationAlertOpts: AlertOpts;
  dateAlertOpts: AlertOpts;
  timeAlertOpts: AlertOpts;

  courses: any[] = [];

  now: any = new Date().getFullYear();
  max: any = (new Date().getFullYear()+3);

  picker: any;

  constructor(private formBuilder: FormBuilder, private localStorage: LocalStorageProvider) {
    window['s'] = this;
    this.courseAlertOpts = {
      title: 'Course',
      subTitle: 'Select your course'
    };
    this.durationAlertOpts = {
      title: 'Duration',
      subTitle: 'What is the preffered duration?'
    };
    this.dateAlertOpts = {
      title: 'Date',
      subTitle: 'When?'
    };
    this.timeAlertOpts = {
      title: 'Time',
      subTitle: 'Preffered time?'
    };
  }

  async ngOnInit(){
    this.form = this.formBuilder.group({
      course: ['', Validators.required],
      duration: ['', Validators.required],
      date: [Date.now(), Validators.required],
      time: ['', Validators.required]
    });
    const courses = await this.localStorage.courses;
    if (courses && courses.length > 0){
      this.courses = courses;
    }
  }

  logForm() {

  }

}
