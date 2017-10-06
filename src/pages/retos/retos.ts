import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';
import { ConfiguracionPage } from '../configuracion/configuracion';
import { TabsPage } from '../tabs/tabs';
import { AlertController } from 'ionic-angular'; //alerta del boton contactos

declare let cordova:any;
/**
 * Generated class for the RetosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name: 'retos'
  })
@Component({
  selector: 'page-retos',
  templateUrl: 'retos.html',
})
export class RetosPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,app: App, menu: MenuController,
    public alerCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RetosPage');
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
  openSettings(){
    this.navCtrl.push(ConfiguracionPage);//push es para que abrir una pantalla encima de otra
  }
  openTabs(){
    this.navCtrl.setRoot(TabsPage)
  }
  doAlert() {
     let alert = this.alerCtrl.create({
       title: 'Contactos',
       message: 'Facebook : play gimnasio \n Whatsapp: +553206688840 \n YouTube: https://www.youtube.com/ '   ,
       buttons: ['Ok']

     });

    alert.present()
  }
}
