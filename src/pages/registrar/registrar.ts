import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiService } from '../../service/api/api';
import { Utils } from '../../libs/utils/utils';


/**
 * Generated class for the RegistrarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

  user = {
  	name:'',
  	email:'',
  	passwd:'',
  	cpasswd:''
  }


  constructor(
  	  public navCtrl: NavController
  	, public navParams: NavParams
  	, public service: ApiService
  	, public utils: Utils) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
  }

  tryRegister(){
  	if( this.user.email.length < 1 || this.user.passwd.length < 1 || this.user.cpasswd.length < 1 || this.user.name.length < 1 ){
  		this.utils.alert('Fill all fields');
  	}else{
  		if(!this.utils.isEmail(this.user.email)){
  			this.utils.alert('Type a valid email')
  		}else{
  			if( this.user.passwd != this.user.cpasswd ){
	  			this.utils.alert('Password and confiration not match');
	  		}else{
		  		this.service.createUser( this.user.name, this.user.email , this.user.passwd)
				.subscribe( res => {
					console.log(res)
					this.utils.alert('User created successfully')
					this.navCtrl.pop(); 
				}, err => { 
					console.log(err); 
					err = JSON.parse(err._body)
					if( err && err.errors.length > 0 ){
						this.utils.alert( err.errors[0].detail )
					}else{
						this.utils.alert('I cant register, verify your internet connection'); 
					}
				})
	  		}
  		}
  	}
  }

}
