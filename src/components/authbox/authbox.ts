import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LocalStorageProvider} from "../../providers/local-storage";
import {Device} from '@ionic-native/device';


interface User {
  email?: string,
  uuid?: string
}

@Component({
  selector: 'authbox',
  templateUrl: 'authbox.html'
})
export class AuthboxComponent {
  @Input() authenticated: boolean;
  @Output() authenticatedChange = new EventEmitter<boolean>();

  authForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private localStorage: LocalStorageProvider,
              private device: Device) {
    this.authForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  authenticate() {
    if (this.authForm.valid) {
      const user: User = {
        email: this.authForm.value.email,
        uuid: this.device.uuid
      };
      this.localStorage.user = user;
      this.authenticatedChange.emit(true)
    }
  }

}
