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


import 'hammerjs';
import { AutenticacionProvider } from '../providers/autenticacion/autenticacion';

 /* const config = {
    apiKey: "AIzaSyCvAy4q1JJI-EN5LHzoxKq7xk5L8ZhTmJ0",
    authDomain: "play-gym.firebaseapp.com",
    databaseURL: "https://play-gym.firebaseio.com",
    projectId: "play-gym",
    storageBucket: "play-gym.appspot.com",
    messagingSenderId: "202295775180"
  };*/

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
    TabsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MaterialModule,
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
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AutenticacionProvider
  ]
})
export class AppModule {}
