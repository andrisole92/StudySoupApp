import {AfterViewChecked, Component} from "@angular/core";
import {NavParams, Platform, ViewController} from "ionic-angular";

@Component({
  templateUrl: 'courses.html'
})
export class CoursesPage implements AfterViewChecked{
  searchQuery: string = '';
  items: string[];
  itemList: string[];
  constructor(public platform: Platform,
              public params: NavParams,
              public viewCtrl: ViewController) {
    this.itemList = [
      'Amsterdam',
      'Bogota'
    ];
    this.items = this.itemList.slice();
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
      this.items = this.itemList.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  selectItem(item){
    this.viewCtrl.dismiss(item);
  }

  ngAfterViewChecked(){
    setTimeout(()=>{
      let elem = <HTMLInputElement>document.querySelector('.some-class input');
      if (elem) {
        elem.focus();
      }
    },100)
  }
}
