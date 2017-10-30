import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';



declare let cordova:any;

@IonicPage({
  name: 'configuracion'
  })
@Component({
  selector: 'page-configuracion',
  templateUrl: 'configuracion.html',
})
export class ConfiguracionPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,app: App, menu: MenuController,
    public alerCtrl: AlertController) {
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
            if (this.platform.is('cordova')){
              cordova.InAppBrowser.open("https://www.youtube.com/","_blank")
            }else{
              window.open("https://www.youtube.com/","_blank")
            }
          }
        },
        {
          text: 'Facebook',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'logo-facebook' : null,
          handler: () => {
            console.log('Share clicked');
            if (this.platform.is('cordova')){
              cordova.InAppBrowser.open("https://www.facebook.com/","_blank")
            }else{
              window.open("https://www.facebook.com/","_blank")
            }
          }
        },
        {
          text: 'Twitter',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'logo-twitter' : null,
          handler: () => {
            console.log('Play clicked');
            if (this.platform.is('cordova')){
              cordova.InAppBrowser.open("https://twitter.com/?lang=en/","_blank")
            }else{
              window.open("https://twitter.com/?lang=en","_blank")
            }
          }
        },
        {
          text: 'Google +',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'logo-googleplus' : null,
          handler: () => {
            console.log('Favorite clicked');
            if (this.platform.is('cordova')){
              cordova.InAppBrowser.open("https://plus.google.com/u/1/113385853126641825821/","_blank")
            }else{
              window.open("https://plus.google.com/u/1/113385853126641825821","_blank")
            }

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
  doAlert() {
     let alert = this.alerCtrl.create({
       title: 'Contactos',
       message: 'Facebook : play gimnasio \n Whatsapp: +553206688840 \n YouTube: https://www.youtube.com/ '   ,
       buttons: ['Ok']

     });

    alert.present()
  }
}
/*import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';
import { ConfiguracionPage } from '../configuracion/configuracion';
import { TabsPage } from '../tabs/tabs';
import { AlertController,ViewController  } from 'ionic-angular';

declare let cordova:any;

@IonicPage({
  name: 'ayuda'
  })

@Component({
  selector: 'page-ayuda',
  templateUrl: 'ayuda.html',
})
export class AyudaPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,app: App, menu: MenuController,
    public alerCtrl: AlertController,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AyudaPage');
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
            if (this.platform.is('cordova')){
              cordova.InAppBrowser.open("https://www.youtube.com/","_blank")
            }else{
              window.open("https://www.youtube.com/","_blank")
            }
          }
        },
        {
          text: 'Facebook',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'logo-facebook' : null,
          handler: () => {
            console.log('Share clicked');
            if (this.platform.is('cordova')){
              cordova.InAppBrowser.open("https://www.facebook.com/","_blank")
            }else{
              window.open("https://www.facebook.com/","_blank")
            }
          }
        },
        {
          text: 'Twitter',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'logo-twitter' : null,
          handler: () => {
            console.log('Play clicked');
            if (this.platform.is('cordova')){
              cordova.InAppBrowser.open("https://twitter.com/?lang=en/","_blank")
            }else{
              window.open("https://twitter.com/?lang=en","_blank")
            }
          }
        },
        {
          text: 'Google +',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'logo-googleplus' : null,
          handler: () => {
            console.log('Favorite clicked');
            if (this.platform.is('cordova')){
              cordova.InAppBrowser.open("https://plus.google.com/u/1/113385853126641825821/","_blank")
            }else{
              window.open("https://plus.google.com/u/1/113385853126641825821","_blank")
            }
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
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
*/
