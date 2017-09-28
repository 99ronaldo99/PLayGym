import { environment } from '../../environments/environment'

declare let FB:any;

export class FacebookWeb {
  initFacebookWeb(cb) {
    if(!document.getElementById('facebook-jssdk')){
      (<any>window).fbAsyncInit = function() {
          FB.init({
            appId      : environment.facebook_id,
            xfbml      : true,
            version    : 'v2.9'
          });
          FB.AppEvents.logPageView();
          cb();
      };
      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
    }else{
      cb();
    }
  }

  doFacebookLogin(cb){
    FB.login(function(responses){
      cb(responses)
    }, { scope: 'public_profile, user_about_me, email' });
  }

}
