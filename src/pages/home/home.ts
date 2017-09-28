import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';

import { ConfiguracionPage } from '../configuracion/configuracion';
import { EjerciciosPage } from '../ejercicios/ejercicios';
import { RutinasPage } from '../rutinas/rutinas';
import { RetosPage } from '../retos/retos';
import { RecomendacionesPage } from '../recomendaciones/recomendaciones';

import { AngularFireAuth } from 'angularfire2/auth'; 


declare let cordova:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
/*export class BasicPage {
  constructor(app: App, menu: MenuController) {
    menu.enable(true);
  }*/ 
export class HomePage {

  constructor(public navCtrl: NavController, public platform: Platform, public afAuth: AngularFireAuth
    ,public actionsheetCtrl: ActionSheetController,app: App, menu: MenuController) 
  {
   /* menu.enable(true);
    window.localStorage.removeItem('corruentuser');
    if (!this.isLoggedin()){
      console.log('you are not logged in');
      this.navCtrl.push(LoginPage)
    }*/
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
          icon: !this.platform.is('ios') ? 'logo-facebook' : null,
          handler: () => {
            console.log('Share clicked');
            if (this.platform.is('cordova')){
              cordova.iab.open("https://www.facebook.com/","_blank")
            }else{
              window.open("https://www.facebook.com/","_blank")
            }
          }
        },
        {
          text: 'Twitter',
          icon: !this.platform.is('ios') ? 'logo-twitter' : null,
          handler: () => {
            console.log('Play clicked');
            if (this.platform.is('cordova')){
              cordova.iab.open("https://twitter.com/?lang=en/","_blank")
            }else{
              window.open("https://twitter.com/?lang=en","_blank")
            }
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

  doLogout(){
    this.afAuth.auth.signOut().then(res=>{
      window.localStorage.setItem('user', 'null' )
      location.href=location.href
    }); 
  }
  openHome(){
    this.navCtrl.setRoot(HomePage)
  }
  openEjerciciosPage(){
    this.navCtrl.setRoot(EjerciciosPage)
  }
  openRutinasPage(){
    this.navCtrl.setRoot(RutinasPage) 
  }
  openRetosPage(){
    this.navCtrl.setRoot(RetosPage) 
  }
  openRecomendacionesPage(){
    this.navCtrl.setRoot(RecomendacionesPage)
  }
  }




