import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //animaciones de angular
import { HttpModule } from '@angular/http'

//importar las paginas aqui 
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
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { LogearPage } from '../pages/logear/logear';
import { PectoralesPage } from '../pages/pectorales/pectorales';
import { EspaldaPage } from '../pages/espalda/espalda';


import { InAppBrowser } from '@ionic-native/in-app-browser';

import { Facebook } from '@ionic-native/facebook';
import { FacebookWeb } from '../libs/facebook/facebook';

import { ApiService } from '../service/api/api'; //importar el api 
import { DialogAlert } from '../dialogs/alert/alert';//importar mensaje de alerta 
import { Utils } from '../libs/utils/utils';

import 'hammerjs';


@NgModule({
  declarations: [
    //    se importan todas las paginas aqui 
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
    LoginPage,
    LogearPage,
    DialogAlert,
    PectoralesPage,
    EspaldaPage,
    
    
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
    //    aqui tambien se importan las paginas     
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
    LoginPage,
    LogearPage,
    DialogAlert,
    PectoralesPage,
    EspaldaPage,
  ],
  providers: [
    // las funciones como alertas 
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
