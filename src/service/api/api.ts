import { Injectable } from '@angular/core'
import { Http , Headers } from '@angular/http'
import { environment } from '../../environments/environment'

import 'rxjs/Rx';

@Injectable()
export class ApiService {

  apiClientID = environment.apiClientId
  apiClientSecret = environment.apiClientSecret
  apiUrl = environment.apiUrl

  constructor(
    public http: Http ){

  }

  getApiUrl(){
    return environment.apiUrl
  }

  createUser( name, email , passwd){
    return this.http.post(`${ this.apiUrl }v1/users`, { name:name, email:email, password_confirmation: passwd, password: passwd})
    .map(response => response.json())
  }

  updateUser( id, name, email ){
    return this.http.put(`${ this.apiUrl }v1/users/${ id }`, { name:name, email:email })
    .map(response => response.json())
  }

  getUser(cb){
    this.getHeaders( ( currentAuthorization : Headers ) => {
      cb(  this.http.get(`${ this.apiUrl }v1/user`, {
        headers: currentAuthorization
      }).map( response => response.json()) )
    })
  }

  loginUser( user ){
    return this.http.post(`${ this.apiUrl }v1/oauth/token`, { username:user.email, password:user.password, client_id:this.apiClientID, client_secret:this.apiClientSecret, grant_type:'password' })
    .map( response => response.json() )
  }

  loginUserFacebook( atoken ){
    return this.http.post(`${ this.apiUrl }v1/oauth/token`, { access_token:atoken, network:'facebook', client_id:this.apiClientID, client_secret:this.apiClientSecret, grant_type:'social' })
    .map(response => response.json());
  }

  getHeaders(cb){

    let hasToken:any = window.localStorage.getItem("token");
    if(  hasToken !== null
      && hasToken !== '' ){
      hasToken = JSON.parse(hasToken);
      var myHeaders = new Headers(); 
      myHeaders.append('Authorization', `${ hasToken.token_type } ${ hasToken.access_token }`);
      cb(myHeaders);
    }

  }

  getArrayHeaders(cb){

    let hasToken:any = window.localStorage.getItem("token");
    if(  hasToken !== null
      && hasToken !== '' ){
      hasToken = JSON.parse(hasToken);
      cb({'Authorization': `${ hasToken.token_type } ${ hasToken.access_token }`});
    }

  }

}