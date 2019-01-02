import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AutocompleteComponent} from "../autocomplete/autocomplete";
import {ModalController} from "ionic-angular";

/**
 * Generated class for the Step1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'step1',
  templateUrl: 'step1.html'
})
export class Step1Component {
  @Input() form: FormGroup;

  constructor(private modalCtrl: ModalController, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

  onTap() {
    let modal = this.modalCtrl.create(AutocompleteComponent);
    modal.present();
    modal.onDidDismiss(val => {
      this.form.controls['name'].setValue(val);
    });
  }
}
