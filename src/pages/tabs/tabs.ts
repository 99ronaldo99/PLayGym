import { Component } from '@angular/core';

import { NutricionPage } from '../nutricion/nutricion';
import { SuplementosPage } from '../suplementos/suplementos';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NutricionPage;
  tab3Root = SuplementosPage;


  isLogged = false

  constructor() {

  }
}
