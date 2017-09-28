import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { HttpModule, Http } from '@angular/http'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RecomendacionesPage } from '../pages/recomendaciones/recomendaciones';
import { RutinasPage } from '../pages/rutinas/rutinas';
import { EjerciciosPage } from '../pages/ejercicios/ejercicios';
import { AyudaPage } from '../pages/ayuda/ayuda';
import { NutricionPage } from '../pages/nutricion/nutricion';
import { RegistrarPage } from '../pages/registrar/registrar';
import { RetosPage } from '../pages/retos/retos';
import { SedesPage } from '../pages/sedes/sedes';
import { SuplementosPage } from '../pages/suplementos/suplementos';
import { TiendaPage } from '../pages/tienda/tienda';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { LogearPage } from '../pages/logear/logear';

import { InAppBrowser } from '@ionic-native/in-app-browser';

import { Facebook } from '@ionic-native/facebook';
import { FacebookWeb } from '../libs/facebook/facebook';

import { ApiService } from '../service/api/api';
import { DialogAlert } from '../dialogs/alert/alert';
import { Utils } from '../libs/utils/utils';

import 'hammerjs';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecomendacionesPage,
    RutinasPage,
    EjerciciosPage,
    AyudaPage,
    NutricionPage,
    RegistrarPage,
    RetosPage,
    SedesPage,
    SuplementosPage,
    TiendaPage,
    ConfiguracionPage,
    AboutPage,
    TabsPage,
    LoginPage,
    LogearPage,
    DialogAlert
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
    NutricionPage,
    RegistrarPage,
    RetosPage,
    SedesPage,
    SuplementosPage,
    TiendaPage,
    ConfiguracionPage,
    TabsPage,
    AboutPage,
    LoginPage,
    LogearPage,
    DialogAlert
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},  
    InAppBrowser,
    Facebook,
    FacebookWeb,
    ApiService,
    Utils,
    DialogAlert
  ]
})
export class AppModule {}
