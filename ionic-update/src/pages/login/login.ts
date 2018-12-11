import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider} from '../../providers/auth-service/auth-service';
import { AboutPage } from '../about/about';
import { RegisterPage } from '../register/register';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

data = {
  email:  '',
  password: ''
}
  

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public authServiceProvider:AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  login(){

    let credentials = {
email: this.data.email,
password: this.data.password
    }

this.authServiceProvider.signInWithEmail(credentials).then(
()=> this.navCtrl.setRoot(AboutPage),
  error => console.log('error')
)

  }




goToRegister(){
  this.navCtrl.push(RegisterPage)
}



}
