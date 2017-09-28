import { Component } from '@angular/core';

import { NutricionPage } from '../nutricion/nutricion';
/*import { ContactosPage } from '../contactos/contactos';*/
import { HomePage } from '../home/home';
import { TiendaPage } from '../tienda/tienda';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NutricionPage;
  /*tab3Root = ContactosPage;
*/  tab4Root = TiendaPage;

  isLogged = false

  constructor() {

  }
}
