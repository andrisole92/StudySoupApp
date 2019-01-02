import {Component, ViewChild} from '@angular/core';
import {Content, NavController} from 'ionic-angular';
import {style, animate, transition, trigger, state} from '@angular/animations';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('fadeInOut', [
      state('in', style({opacity: 0})),
      state('done', style({opacity: 1})),
      transition('in => done', animate('10000ms linear'))
    ])
  ]
})
export class HomePage {
  @ViewChild(Content) content: Content;

  authenticated: boolean = false;
  private fadeInOut: string = 'in';

  benefits = [
    {
      img: 'assets/imgs/icon1.png',
      text: 'one_on_one',
    },
    {
      img: 'assets/imgs/icon2.png',
      text: 'personalized',
    },
    {
      img: 'assets/imgs/icon3.png',
      text: 'feel_conf',
    }
  ];

  testimonial = {
    text: 'tstmonial',
    author: 'ryan',
    img: 'assets/imgs/ryan.png'
  };

  constructor(public navCtrl: NavController) {
    window['navCtrl'] = this.navCtrl;
  }
  ngAfterViewInit(){
    window['content'] = this.content;
    console.log(this.content.contentHeight)

  }
}
