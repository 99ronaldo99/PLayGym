import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';




/**
 * Generated class for the ConfiguracionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name: 'configuracion'
  })
@Component({
  selector: 'page-configuracion',
  templateUrl: 'configuracion.html',
})
export class ConfiguracionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public platform: Platform,public actionsheetCtrl: ActionSheetController,app: App, menu: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracionPage');
  }
  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Nuestras Redes',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'YouTube',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'logo-youtube' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Facebook',
          icon: !this.platform.is('ios') ? 'logo-facebook' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Twitter',
          icon: !this.platform.is('ios') ? 'logo-twitter' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Google +',
          icon: !this.platform.is('ios') ? 'logo-googleplus' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
