import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Platform,ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-biceps',
  templateUrl: 'biceps.html',
})
export class BicepsPage {
	character;

  constructor(
  	public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController) {

  	var characters = [
      {
        name: 'Curl de biceps alterno',
        quote: 'para aun optimo resultado sigue \n las instrucciones!',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'River Folk' },
          { title: 'Alter Ego', note: 'Smeagol' }
        ]
      },
      {
        name: 'Curl de biceps concentrado',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Curl de biceps alterno, martillo',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Curl de biceps con polea',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Curl de biceps con barra',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Curl en banco scott',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Curl con barra en polea',
        quote: 'What we need is a few good taters.',
        image: '',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      },
      {
        name: 'Curl de biceps inclinado',
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
    console.log('ionViewDidLoad BicepsPage');
  }

}

