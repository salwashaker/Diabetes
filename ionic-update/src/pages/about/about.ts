import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { FindPage } from '../find/find';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  
  peopleList 
  constructor(public navCtrl: NavController,
    public db: AngularFireDatabase) {
      
          
    this.peopleList = this.db.list('people').snapshotChanges();
  }
   
  createPerson(name,number){
    this.db.list('people').push 
      ({
          name : name,
        number : number,
    
          }).then(newPerson =>{
      this.navCtrl.push(FindPage);
      },error=>{console.log(error);});

  
  }
  
}
  