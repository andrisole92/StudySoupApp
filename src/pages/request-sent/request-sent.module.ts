import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestSentPage } from './request-sent';

@NgModule({
  declarations: [
    RequestSentPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestSentPage),
  ],
})
export class RequestSentPageModule {}
