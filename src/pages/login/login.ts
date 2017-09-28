import { Component } from '@angular/core';
import { NavController, NavParams , Platform} from 'ionic-angular'; 

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { FacebookWeb } from '../../libs/facebook/facebook';
import { LogearPage } from '../logear/logear';
import { RegistrarPage } from '../registrar/registrar';
 

@Component({
  selector: 'page-login',
  templateUrl:'login.html',
})
export class LoginPage {

loadingFacebook = false

  constructor( 
  	public navCtrl: NavController, 
  	public navParams: NavParams,  
    public fb: Facebook,
    public fbWeb: FacebookWeb,
    public platform: Platform) { }
   
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginFacebook(){
   if (!this.platform.is('cordova')) {
     this.webFacebook();
   }else{
     this.mobileFacebook();
   }
  }

  mobileFacebook(){ 
    if(!this.loadingFacebook){
      this.loadingFacebook = true;
      this.fb.getLoginStatus().then(res=>{
        if(res.status === 'connected'){
          console.log('user already logged', res.authResponse.accessToken )
        }else{
          this.reallyMobileFacebook();
        }
      })
    }
  }

  reallyMobileFacebook(){
    this.fb.login(['public_profile', 'user_about_me', 'email'])
    .then((res: FacebookLoginResponse) => {
      this.logFacebookUser(res) ;
    }).catch(err => { console.log(err) ; this.loadingFacebook = false; })
  }

  webFacebook(){ 
    this.fbWeb.initFacebookWeb( () => {
      this.fbWeb.doFacebookLogin( (res) => {
        this.logFacebookUser(res) ;
      });
    });
  }


  logFacebookUser(res){
    // res.authResponse.accessToken
    console.log('Logged into Facebook!', res) 
  }
  openLogearPage(){
    this.navCtrl.push(LogearPage)
  }
  openRegistrarPage(){
    this.navCtrl.push(RegistrarPage)
  }
}
