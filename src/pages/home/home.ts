import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';

import { ConfiguracionPage } from '../configuracion/configuracion';
/*import { LoginPage } from '../login/login';*/



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
/*export class BasicPage {
  constructor(app: App, menu: MenuController) {
    menu.enable(true);
  }*/ 
export class HomePage {

  constructor(public navCtrl: NavController, public platform: Platform,public actionsheetCtrl: ActionSheetController,app: App, menu: MenuController) 
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
  openHome(){
    this.navCtrl.setRoot(HomePage)
  }
  /*isLoggedin(){
    if (window.localStorage.getItem('currentuser')){
      return true;
    }*/
  
  }



/*import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProviders, AuthMethods, AngularFire } from 'angularfire';


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

/*@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email:any;
  password:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public angfire: AngularFire) {}


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    this.angfire.auth.login({
      email:this.email,
      password:this.password
    },
    {
      Provider: AuthProviders.password,
      method:AuthMethods.password
    }).then((response)=>{
      console.log('login success' + JSON.stringify(response));
      let currentuser = {
        email: response.auth.email,
        picture :response.auth.photoURL 
      };
      window.localStorage.setItem('currentuser', JSON.stringify('currentuser')); 
      this.navCtrl.pop();
    }).catch((error)=> {
      console.log (error);
    }) 
  } 

}
*/
