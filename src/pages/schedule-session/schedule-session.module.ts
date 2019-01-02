import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScheduleSessionPage } from './schedule-session';

@NgModule({
  declarations: [
    ScheduleSessionPage,
  ],
  imports: [
    IonicPageModule.forChild(ScheduleSessionPage),
  ],
})
export class ScheduleSessionPageModule {}
