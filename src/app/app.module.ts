import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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



import 'hammerjs';

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
    TiendaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MaterialModule,
    [BrowserAnimationsModule]
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
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
