import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
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
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'مرحبا بك', component: HomePage },
      { title: 'طرق التغذية الصحيحة لمرضى السكري', component: Tab1Page },
      { title: 'نصائح لمرضى السكري في رمضان', component: Tab2Page },
      { title: 'فحوصات مرض السكري', component: Tab3Page },
      { title: 'استخدام الاعشاب في علاج مرض السكري', component: Tab4Page },
      { title: 'كيفية التعامل مع مرضى السكري', component: Tab5Page },
      { title: 'معدل السكر التراكمي', component: Tab6Page },
      { title: 'نصائح تتعلق بالصحة والرياضة', component: Tab7Page },
      { title: 'اسباب المرض ', component: Tab8Page },
      { title: 'طرق الوقاية من المرض', component: Tab9Page },
      { title: 'سكر الحمل وطرق الوقاية منه', component: Tab10Page },
      { title: 'طرق علاج جروح مرضى السكري', component: Tab11Page }
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
