import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AboutPage } from '../about/about';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {



data = {
  email:  '',
  password: ''
}



  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public authServiceProvider:AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


  register(){


    let credentials = {
      email: this.data.email,
      password: this.data.password
          }
      
      this.authServiceProvider.signUp(credentials).then(
        ()=> this.navCtrl.setRoot(AboutPage),
        error => console.log("error=" + error)
      )

  }
  goToLog(){
    this.navCtrl.push(LoginPage)
  }
}
