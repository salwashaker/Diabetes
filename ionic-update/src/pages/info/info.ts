import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  name;
  title;
  info;
  formattedDate;
  constructor(public navCtrl: NavController,
     public navParams: NavParams) {

      this.name = navParams.get("name");
       this.title = navParams.get("title");  
    this.info = navParams.get("info");
    this.getFormattedDate()
  
  
}
getFormattedDate(){
  var date = new Date();
  
     var year = date.getFullYear().toString()
  
     var month = date.getMonth().toString()
  
     var day = date.getDate().toString()
  
     this. formattedDate = year + "/" + month + "/" + day;
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}
