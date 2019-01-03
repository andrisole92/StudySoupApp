import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ModalController} from "ionic-angular";
import {AutocompleteComponent} from "../autocomplete/autocomplete";

interface Course {
  name: string,
  examDate: any
}

@Component({
  selector: 'step2',
  templateUrl: 'step2.html'
})
export class Step2Component {
  @Input() forms: FormGroup[];
  courses: Course[] = [];
  courseCount: number = 0;
  selecting: number = 0;

  //datepicker min max
  now: any = new Date().getFullYear();
  max: any = (new Date().getFullYear()+3);

  constructor(private formBuilder: FormBuilder, public modalCtrl: ModalController) {
    console.log(this.now);
    console.log(this.max);
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
    if (this.courseCount === 0){
      this.forms[0] = this.buildForm();
    } else {
      this.courseCount--;
      this.forms.splice(n, 1);
    }
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      examDate: ['']
    });
  }

}
