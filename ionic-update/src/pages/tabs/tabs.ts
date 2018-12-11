import { Component } from '@angular/core';
import { Tab15Page } from '../tab15/tab15';
import { Tab16Page } from '../tab16/tab16';
import { FindPage } from '../find/find';
import { TeamPage } from '../team/team';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Tab15Page;
  tab2Root = Tab16Page;
  tab3Root = FindPage;
  tab4Root = TeamPage;
  constructor() {
 


  }
}