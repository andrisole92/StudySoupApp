import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ModalController} from "ionic-angular";
import {CoursesPage} from "./course";
import {AutocompleteComponent} from "../autocomplete/autocomplete";
import {style, state, animate, transition, trigger} from '@angular/animations';

interface Course {
  name: string,
  examDate: any
}

@Component({
  selector: 'step2',
  templateUrl: 'step2.html',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(100, style({opacity:1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(0, style({opacity:0}))
      ])
    ])
  ]
})
export class Step2Component {
  @Input() forms: FormGroup[];
  courses: Course[] = [];
  courseCount: number = 0;
  selecting: number = 0;

  //datepicker min max
  now: any = new Date().getFullYear() + '-' + new Date().getMonth();
  max: any = (new Date().getFullYear()+1) + '-' + (new Date().getMonth()+2);

  constructor(private formBuilder: FormBuilder, public modalCtrl: ModalController) {
  }

  ngOnInit() {
    if (this.forms.length === 0) this.forms.push(this.buildForm());
    this.courseCount = this.forms.length - 1;
  }

  onTap(n?: number) {
    this.selecting = n;
    let modal = this.modalCtrl.create(AutocompleteComponent);
    modal.present();
    modal.onDidDismiss(c => {
      this.forms[this.selecting].controls['name'].setValue(c);
    });
  }

  addExamDate(i: number) {
    console.log('addExamDate ' + i)
  }

  addNewCourse() {
    const valid = this.forms[this.courseCount].valid;
    if (this.forms[this.courseCount].valid) {
      this.forms.push(this.buildForm());
      this.courseCount++;
      this.onTap(this.courseCount)
    }

  }


  removeCourse(n: number) {
    this.forms.splice(n, 1);
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      examDate: ['']
    });
  }

}
