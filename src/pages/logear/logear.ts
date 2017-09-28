import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiService } from '../../service/api/api';
import { Utils } from '../../libs/utils/utils';
/**
 * Generated class for the LogearPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logear',
  templateUrl: 'logear.html',
})
export class LogearPage {

  user = {
  	email:'',
  	password:''
  }

  constructor(
  	  public navCtrl: NavController
  	, public navParams: NavParams
  	, public service: ApiService
  	, public utils: Utils
  	) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogearPage');
  }

  tryLogin(){ 
  	if( this.user.email.length < 1 || this.user.password.length < 1 ){
  		this.utils.alert('Fill all fields');
  	}else{
  		if( !this.utils.isEmail(this.user.email) ){
  			this.utils.alert('Type a valid email adrress');
  		}else{
        this.utils.showLoad()
	  		this.service.loginUser(this.user)
			.subscribe( res => {
				console.log(res);
        this.utils.hideLoad()
				window.localStorage.setItem('user','logged')
				location.href=location.href
				// finalize login with storage


			}, err => { console.log(err); this.utils.hideLoad(); this.utils.alert('I cant login, verify your credential and try again');  })
  		}
  	}
  }


  
}
