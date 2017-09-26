import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';


import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

/**
 * Generated class for the LoginPage page.

	
  template: `
  <h1>{{ item | async | json }}</h1>
  <input type="text" #newname placeholder="Name" />
  <input type="text" #newsize placeholder="Size" />
  <br />
  <button (click)="save(newname.value)">Set Name</button>
  <button (click)="update(newsize.value)">Update Size</button>
  <button (click)="delete()">Delete</button>
  `

 */
  
@Component({
  selector: 'page-login',
  templateUrl:'login.html',
})
export class LoginPage {

user: Observable<firebase.User>;
item: FirebaseObjectObservable<any>;

  constructor(
  	public db: AngularFireDatabase, 
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
  	public afAuth: AngularFireAuth) {
    this.item = db.object('/item')
    this.user = afAuth.authState
  
  }
  save(newName: string) {
    this.item.set({ name: newName });
  }
  update(newSize: string) {
    this.item.update({ size: newSize });
  }
  delete() {
    this.item.remove();
  } 
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then( res => { 

    	let user = { 
    		user_name: res.user.displayName,
    		user_email: res.user.email,
    		user_photo: res.user.photoURL,
    		provider_id: res.credential.providerId,
    		id_token: res.credential.idToken,
    		access_token: res.credential.accessToken
    	} 

    	window.localStorage.setItem('user', JSON.stringify(user) )
    	location.href = location.href

    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  showUser(){
  	this.user.subscribe(res=>{
  		console.log(res)
  	})
  }

}
