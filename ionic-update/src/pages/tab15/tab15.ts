import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  {AboutPage } from '../about/about';
import  {ContactPage } from '../contact/contact';
import  {Tab16Page } from '../tab16/tab16';
import  { FindPage } from '../find/find';
import  { LoginPage } from '../login/login';
/**
 * Generated class for the Tab15Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab15',
  templateUrl: 'tab15.html',
})
export class Tab15Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 
  goToAddloPage(){
    this.navCtrl.push(LoginPage)
    console.log('goToAddloPage')
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab15Page');
  }

}
