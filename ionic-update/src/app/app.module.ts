import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Tab1Page } from '../pages/tab1/tab1';
import { Tab2Page } from '../pages/tab2/tab2';
import { Tab3Page } from '../pages/tab3/tab3';
import { Tab4Page } from '../pages/tab4/tab4';
import { Tab5Page } from '../pages/tab5/tab5';
import { Tab6Page } from '../pages/tab6/tab6';
import { Tab7Page } from '../pages/tab7/tab7';
import { Tab8Page } from '../pages/tab8/tab8';
import { Tab9Page } from '../pages/tab9/tab9';
import { Tab10Page } from '../pages/tab10/tab10';
import { Tab11Page } from '../pages/tab11/tab11';
import { Tab15Page } from '../pages/tab15/tab15';
import { Tab16Page } from '../pages/tab16/tab16';
import {FindPage } from '../pages/find/find';
import { TabsPage } from '../pages/tabs/tabs';
import { TeamPage } from '../pages/team/team';
import { InfoPage } from '../pages/info/info';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { AngularFireAuth } from 'angularfire2/auth';



const config = {
  apiKey: "AIzaSyDWHZyI65v7dwfPTJamjRggksNn2mfP58A",
  authDomain: "salwa-89242.firebaseapp.com",
  databaseURL: "https://salwa-89242.firebaseio.com",
  projectId: "salwa-89242",
  storageBucket: "salwa-89242.appspot.com",
  messagingSenderId: "783419667235"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    ContactPage,
    TabsPage,
    Tab15Page,
    Tab16Page,
    FindPage,
    LoginPage,
    RegisterPage,
    TeamPage,
    InfoPage,
    Tab1Page,
    Tab2Page,
    Tab3Page,
    Tab4Page,
    Tab5Page,
    Tab6Page,
    Tab7Page,
    Tab8Page,
    Tab9Page,
    Tab10Page,
    Tab11Page
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule ,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    ContactPage,
    TabsPage,
    Tab15Page,
    Tab16Page,
    FindPage,
    LoginPage,
    RegisterPage,
    TeamPage,
    InfoPage,
    Tab1Page,
    Tab2Page,
    Tab3Page,
    Tab4Page,
    Tab5Page,
    Tab6Page,
    Tab7Page,
    Tab8Page,
    Tab9Page,
    Tab10Page,
    Tab11Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AuthServiceProvider
  ]
})
export class AppModule {}
