import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { PectoralesPage } from '../pectorales/pectorales';
import { ModalController} from 'ionic-angular';
import { EspaldaPage } from '../espalda/espalda';
import { ConfiguracionPage } from '../configuracion/configuracion';
import { BicepsPage } from '../biceps/biceps';
import { TricepsPage } from '../triceps/triceps';
import { HombroPage } from '../hombro/hombro';
import { PiernaPage } from '../pierna/pierna';
import { AbdomenPage } from '../abdomen/abdomen';
import { AntebrazoPage } from '../antebrazo/antebrazo';


declare let cordova:any;
/**
 * Generated class for the EjerciciosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name: 'ejercicios'
  })
@Component({
  selector: 'page-ejercicios',
  templateUrl: 'ejercicios.html',
  
})
export class EjerciciosPage {
  pet: string = "puppies";
  isAndroid: boolean = false;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,app: App, menu: MenuController,
    public alerCtrl: AlertController,
    public modalCtrl: ModalController,
    public modaCtrl: ModalController,
    public bicepsCtrl: ModalController,
    public triceCtrl: ModalController,
    public HombroCtrl: ModalController,
    public PiernaCtrl: ModalController,
    public AbdomenCtrl: ModalController,
    public AntebrazoCtrl: ModalController,

    ) {
  }
  openModal(characterNum) {

    let modal = this.modalCtrl.create(PectoralesPage, characterNum);
    modal.present();
  }

  openModa(characterNum) {

    let moda = this.modaCtrl.create(EspaldaPage, characterNum);
    moda.present();
  }

  openbiceps(characterNum) {

    let biceps = this.bicepsCtrl.create(BicepsPage, characterNum);
    biceps.present();
  }

  opentrice(characterNum) {

    let trice = this.triceCtrl.create(TricepsPage, characterNum);
    trice.present();

  }

  openHombro(characterNum){
    let Hombro = this.HombroCtrl.create(HombroPage,characterNum);
    Hombro.present();
  }


  openPierna(characterNum){
    let Pierna = this.PiernaCtrl.create(PiernaPage,characterNum);
    Pierna.present();
  }

  openAbdomen(characterNum){
    let Abdomen = this.AbdomenCtrl.create(AbdomenPage,characterNum);
    Abdomen.present();
  }

  openAntebrazo(characterNum){
    let Antebrazo = this.AntebrazoCtrl.create(AntebrazoPage,characterNum);
    Antebrazo.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EjerciciosPage');
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
