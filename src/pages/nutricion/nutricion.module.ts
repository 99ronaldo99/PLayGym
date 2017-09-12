import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NutricionPage } from './nutricion';

@NgModule({
  declarations: [
    NutricionPage,
  ],
  imports: [
    IonicPageModule.forChild(NutricionPage),
  ],
})
export class NutricionPageModule {}
