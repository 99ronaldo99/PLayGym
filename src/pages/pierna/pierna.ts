import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Platform,ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pierna',
  templateUrl: 'pierna.html',
})
export class PiernaPage {
	character;

  constructor(
  	public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController) {

  	var characters = [
      {
        name: 'Semtadillas pierna separadas',
        quote: 'para aun optimo resultado sigue \n las instrucciones!',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'River Folk' },
          { title: 'Alter Ego', note: 'Smeagol' }
        ]
      },
      {
        name: 'Setadillas frontales con barra',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Press pierna',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Sentadilla hack',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Extension de pierna en maquina ',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Curl de pierna acostado',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Curl de pierna sentado en maquina',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Gemelos de pie en maquina',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Gemelos sentado maquina',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Peso muerto',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Flexion de tronco al frente',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Aductores en maquina ',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Extension de cadera polea baja',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Extension de cadera en maquina',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Extansion de cadera en suelo',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Adcuccion de cadera de pie polea',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'abduccion de cedera acostado',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Abdcutores sentado en maquina ',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Peso muerto rumano',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'tijeras con macuerna',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'femonal con fitball',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'sentadillas bulgadas ',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'sentadillas con mancuernas',
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
    console.log('ionViewDidLoad PiernaPage');
  }

}

