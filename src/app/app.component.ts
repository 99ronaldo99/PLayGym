import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular'; //importar iconos de angular 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// estos import son para las paginas de la applicacion 
// import + nombre pagina + from + direcccion del archivo

import { AyudaPage } from '../pages/ayuda/ayuda';
import { SedesPage } from '../pages/sedes/sedes';
import { TiendaPage } from '../pages/tienda/tienda';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { LogearPage } from '../pages/logear/logear';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav; 

  rootPage: any= this.isLogged() ? TabsPage : LoginPage  //no mostrar pagina principal hasta estar logado


  pages: Array<{title: string, component: any, icon: string}>;//para mostrar los iconos en el menu

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    // agregar botones al menu 
    this.pages = [
      { title: 'Sedes'/*nombre del boton*/ , component: SedesPage /*pagina a abrir*/, icon: "pin"/*icono boton*/ },
      { title: 'Tienda', component: TiendaPage , icon: "cart"},
      { title: 'Ayuda', component: AyudaPage, icon: "help-circle"  },
      { title: 'Logear', component: LogearPage, icon: "help-circle"  },
    ];
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
    //si esta logado almacenara los datos en la localstorage
  isLogged(){
    let hasUser = window.localStorage.getItem('user')
    if( hasUser 
     && hasUser !== 'null' 
     && hasUser !== 'undefined' ){
      return true;
    }
    return false;
  }

}
