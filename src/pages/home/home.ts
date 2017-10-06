import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';
import { AlertController } from 'ionic-angular'; //alerta del boton contactos

import { ConfiguracionPage } from '../configuracion/configuracion';
import { EjerciciosPage } from '../ejercicios/ejercicios';
import { RutinasPage } from '../rutinas/rutinas';
import { RetosPage } from '../retos/retos';
import { RecomendacionesPage } from '../recomendaciones/recomendaciones';



declare let cordova:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(
    public navCtrl: NavController, 
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,app: App, menu: MenuController,
    public alerCtrl: AlertController) 
  {
  
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
    // push para abrir una pagina encima de la anterior
    this.navCtrl.push(ConfiguracionPage);//push es para que abrir una pantalla encima de otra
  }

  doLogout(){ 
    window.localStorage.setItem('user', 'null' )
    location.href=location.href 
  }
  // aqui estan todas las funcionalidades de click
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
  // funcion del boton contactos aqui se escribe su mensaje
  
  doAlert() {
     let alert = this.alerCtrl.create({
       title: 'Contactos',
       message: 'Facebook : play gimnasio \n Whatsapp: +553206688840 \n YouTube: https://www.youtube.com/ '   ,
       buttons: ['Ok']

     });

    alert.present()
  }
}

//bienvenido al sena. Tema:\n Javascript.\n cada'cosa' en su lugar.\n Hace que se pueda / encontrar\n mas\"facilmente\"\n


