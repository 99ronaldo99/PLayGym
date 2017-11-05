import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Platform,ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-abdomen',
  templateUrl: 'abdomen.html',
})
export class AbdomenPage {
	character;

  constructor(
  	public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController) {

  	var characters = [
      {
        name: 'Encogimientos',
        quote: 'para aun optimo resultado sigue \n las instrucciones!',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'River Folk' },
          { title: 'Alter Ego', note: 'Smeagol' }
        ]
      },
      {
        name: 'Elevacion tronco del suelo',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Encogimiento con pies en un banco',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Elevaciones del tronco inclinado',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'encogimiento en polea',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Elevaciones de pierna',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Elevaciones de rodillas en paralelas ',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Elevaciones de piernas suspendido',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'rotacion del tronco con baston',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Flexion lateral con mancuerna',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Flecion lateral del tronco en banco',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Advominales en maquina',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Flexion lateral en polea alta',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Abdominales con fitball',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },

    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbdomenPage');
  }

}

