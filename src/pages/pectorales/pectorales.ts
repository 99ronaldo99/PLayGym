import { IonicPage, NavParams } from 'ionic-angular';
import { Platform,ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
/*import { AyudaPage } from '../ayuda/ayuda';
import { SedesPage } from '../sedes/sedes';
import { TiendaPage } from '../tienda/tienda';
import { LoginPage } from '../pages/login/login';
*//*import { TabsPage } from '../pages/tabs/tabs';
import { TamizajePage } from '../tamizaje/tamizaje';*/


@IonicPage()
@Component({
  selector: 'page-pectorales',
  templateUrl: 'pectorales.html',
})
export class PectoralesPage {
	character;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(
  	public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController) {

  	var characters = [
    {
        name: 'Press banco plano \n hola ',
        image: 'https://ugc.kn3.net/i/origin/http://www.gimnasiototal.com/animaciones/ejerciciosparapecho.gif',
        link: 'https://www.youtube.com/watch?v=nSDgHBxUbVQ',
        items: [
          { title: 'Intrucciones', message: 'Acostado sobre el banco plano, con el abdomen tencionado y gluteos \n, tomar la barra en agarre pronacion ',
           },
              
        ]
      },
      {
        name: 'press banco , manos juntas',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'http://www.anatomia-humana.com/Imagenes/press-banca-plano-manos-juntas-emu44.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' },
        ]
      },
      {
        name: 'Press banco inclinado ',
        quote: 'What we need is a few good taters.',
        image: 'https://www.blogdeculturismo.com/wp-content/uploads/2012/03/Pectorales3.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'press banco declinado ',
        quote: 'What we need is a few good taters.',
        image: 'https://rutinasentrenamiento.com/wp-content/uploads/press-pecho-banco-declinado.jpg',
        items: [ 
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Press de barra en maquina',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Flexiones de brazos',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Fondos en paralelas',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Press con mancuernas ',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Apertura con mancuernas',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Press inclinado, mancuernas',
        quote: 'What we need is a few good taters',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Apertura inclinado, mancuernas',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Apertura de contractor',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Cruce de poleas',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Pull over con maquina',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PectoralesPage');
  }

}



