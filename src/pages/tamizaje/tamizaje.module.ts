import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TamizajePage } from './tamizaje';

@NgModule({
  declarations: [
    TamizajePage,
  ],
  imports: [
    IonicPageModule.forChild(TamizajePage),
  ],
})
export class TamizajePageModule {}
