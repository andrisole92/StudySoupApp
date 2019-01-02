import {Component} from '@angular/core';
import {Events, Keyboard} from 'ionic-angular';

/**
 * Generated class for the ChatBoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat-box',
  templateUrl: 'chat-box.html'
})
export class ChatBoxComponent {

  keyboardOpen: boolean = false;

  constructor(private keyboard: Keyboard) {
    console.log(this.keyboard);
    if (this.keyboard['didHide']) {
      this.keyboard['didHide'].subscribe(() => {
        this.keyboardOpen = false;
      });
    }
    if (this.keyboard['willShow']) {
      this.keyboard['willShow'].subscribe(() => {
        this.keyboardOpen = true;
      });
    }

  }
}
