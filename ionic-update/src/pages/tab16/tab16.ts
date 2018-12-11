import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import {ContactPage } from '../contact/contact';

import {LoginPage } from '../login/login';
import {RegisterPage } from '../register/register';
import { InfoPage } from '../info/info';
import { Observable } from 'rxjs';
/**
 * Generated class for the Tab16Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab16',
  templateUrl: 'tab16.html',
})
export class Tab16Page {
  items:Observable <any[]>;
  constructor(public navCtrl: NavController,
    public db:AngularFireDatabase) {
  
    
    this.items = this.db.list('posts').valueChanges();
    
  
  }
  
  add(){
    this.navCtrl.push(ContactPage);
  }

  viewInfo(name,title,info){
    this.navCtrl.push(InfoPage,{
      name:name,
      title:title,
      info:info,

    })
  }
}

  


  