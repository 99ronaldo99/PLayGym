import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { RecomendacionesPage } from '../pages/recomendaciones/recomendaciones';
import { EjerciciosPage } from '../pages/ejercicios/ejercicios';
import { RutinasPage } from '../pages/rutinas/rutinas';
import { AyudaPage } from '../pages/ayuda/ayuda';
import { ContactosPage } from '../pages/contactos/contactos';
import { NutricionPage } from '../pages/nutricion/nutricion';
import { RegistrarsePage } from '../pages/registrarse/registrarse';
import { RetosPage } from '../pages/retos/retos';
import { SedesPage } from '../pages/sedes/sedes';
import { SuplementosPage } from '../pages/suplementos/suplementos';
import { TiendaPage } from '../pages/tienda/tienda';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Recomendaciones', component: RecomendacionesPage  },
      { title: 'Ejercicios', component: EjerciciosPage  },
      { title: 'Rutinas', component: RutinasPage },
      { title: 'Ayuda', component: AyudaPage },
      { title: 'Contactos', component: ContactosPage },
      { title: 'Nutricion', component: NutricionPage },
      { title: 'Registrarse', component: RegistrarsePage },
      { title: 'Retos', component: RetosPage },
      { title: 'Sedes', component: SedesPage },
      { title: 'Suplementos', component: SuplementosPage },
      { title: 'Tienda', component: TiendaPage }
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
}
