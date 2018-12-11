import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

/**
 * Generated class for the Tab16Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-find',
  templateUrl: 'find.html',
})
export class FindPage {
  persons:Observable<any[]>;
  constructor(public navCtrl: NavController,public db:AngularFireDatabase) {
    
    
    this.persons = this.db.list('people').snapshotChanges();
    
  
  }
}
