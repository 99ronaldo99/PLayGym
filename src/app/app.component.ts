import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// estos import son para las paginas de la applicacion 
// importar + nombre pagina + de + direcccion del archivo

import { RecomendacionesPage } from '../pages/recomendaciones/recomendaciones';
import { EjerciciosPage } from '../pages/ejercicios/ejercicios';
import { RutinasPage } from '../pages/rutinas/rutinas';
import { AyudaPage } from '../pages/ayuda/ayuda';
import { RegistrarPage } from '../pages/registrar/registrar';
import { RetosPage } from '../pages/retos/retos';
import { SedesPage } from '../pages/sedes/sedes';
import { SuplementosPage } from '../pages/suplementos/suplementos';
import { TiendaPage } from '../pages/tienda/tienda';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { LogearPage } from '../pages/logear/logear';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav; 

  rootPage: any= LoginPage 
/*  rootPage: any= this.isLogged() ? TabsPage : LoginPage  /*rootPage: any= TabsPage */

  pages: Array<{title: string, component: any, icon: string}>;//se cambio icon: string

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Sedes', component: SedesPage , icon: "pin" },
      { title: 'Tienda', component: TiendaPage , icon: "cart" },
      { title: 'Suplementos', component: SuplementosPage , icon: "flag" },
      { title: 'Ayuda', component: AyudaPage, icon: "help-circle"  },
      { title: 'Registrar', component: RegistrarPage, icon: "help-circle"  },
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
