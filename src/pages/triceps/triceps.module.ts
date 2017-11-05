import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TricepsPage } from './triceps';

@NgModule({
  declarations: [
    TricepsPage,
  ],
  imports: [
    IonicPageModule.forChild(TricepsPage),
  ],
})
export class TricepsPageModule {}
