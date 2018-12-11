import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  

  constructor(public navCtrl: NavController,
    public db: AngularFireDatabase,public toast : ToastController) {

    }
    
      ionViewDidLoad() {
        console.log('ionViewDidLoad ContactPage');
      }
     
    
      add(name,title,info){
        this.db.list("posts").push({
         name:name,
         title:title,
         info:info,
        }).then( ()=> {
         this.toast.create({
           message:"post has been added",
           duration:3000
         }).present();
         this.navCtrl.pop();
        })
        }
      }     
  

  
