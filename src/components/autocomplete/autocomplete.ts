import {AfterViewChecked, Component} from "@angular/core";
import {NavParams, Platform, ViewController} from "ionic-angular";

@Component({
  selector: 'autocomplete',
  templateUrl: 'autocomplete.html'
})
export class AutocompleteComponent implements AfterViewChecked {
  searchQuery: string = '';
  currentItems: string[];
  allItems: string[];

  checked: boolean = false;

  searchElem: HTMLInputElement;

  constructor(public platform: Platform,
              public params: NavParams,
              public viewCtrl: ViewController) {
    this.allItems = [
      'Amsterdam',
      'Bogota',
      'Dakota'
    ];
    this.currentItems = this.allItems.slice();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  getItems(ev: any) {
    // Reset items back to all of the items

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.currentItems = this.allItems.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  selectItem(item) {
    if (this.searchElem) {
      this.searchElem.blur();
      this.viewCtrl.dismiss(item);
    }
  }

  ngAfterViewInit() {
    this.searchElem = <HTMLInputElement>document.querySelector('.autocomplete_bar input');
  }

  ngAfterViewChecked() {
    if (!this.checked) {
      this.checked = true;
      setTimeout(() => {
        // this.searchElem = <HTMLInputElement>document.querySelector('.autocomplete_bar input');
        if (this.searchElem) {
          this.searchElem.focus();
        }
      }, 500)
    }
  }

}
