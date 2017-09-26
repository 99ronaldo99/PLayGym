import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RecomendacionesPage } from '../pages/recomendaciones/recomendaciones';
import { RutinasPage } from '../pages/rutinas/rutinas';
import { EjerciciosPage } from '../pages/ejercicios/ejercicios';
import { AyudaPage } from '../pages/ayuda/ayuda';
import { ContactosPage } from '../pages/contactos/contactos';
import { NutricionPage } from '../pages/nutricion/nutricion';
import { RegistrarsePage } from '../pages/registrarse/registrarse';
import { RetosPage } from '../pages/retos/retos';
import { SedesPage } from '../pages/sedes/sedes';
import { SuplementosPage } from '../pages/suplementos/suplementos';
import { TiendaPage } from '../pages/tienda/tienda';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { AutenticacionProvider } from '../providers/autenticacion/autenticacion';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { InAppBrowser } from '@ionic-native/in-app-browser';

import 'hammerjs';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBbxW3HisQRxrvivv87cZVYun0vehnPKEk",
    authDomain: "playgym-91674.firebaseapp.com",
    databaseURL: "https://playgym-91674.firebaseio.com",
    projectId: "playgym-91674",
    storageBucket: "playgym-91674.appspot.com",
    messagingSenderId: "593375746685"
}; 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecomendacionesPage,
    RutinasPage,
    EjerciciosPage,
    AyudaPage,
    ContactosPage,
    NutricionPage,
    RegistrarsePage,
    RetosPage,
    SedesPage,
    SuplementosPage,
    TiendaPage,
    ConfiguracionPage,
    AboutPage,
    ContactPage,
    TabsPage,
    LoginPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MaterialModule,
    AngularFireModule.initializeApp(config),
    [BrowserAnimationsModule],
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RecomendacionesPage,
    RutinasPage,
    EjerciciosPage,
    AyudaPage,
    ContactosPage,
    NutricionPage,
    RegistrarsePage,
    RetosPage,
    SedesPage,
    SuplementosPage,
    TiendaPage,
    ConfiguracionPage,
    TabsPage,
    AboutPage,
    ContactPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AutenticacionProvider,
    AngularFireDatabase,
    AngularFireAuth,
    InAppBrowser
  ]
})
export class AppModule {}
