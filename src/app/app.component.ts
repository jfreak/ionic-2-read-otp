import { Component } from '@angular/core';
import { Platform,Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
declare var window: any;
@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public events: Events) {
    platform.ready().then(() => {
      if(window.SMS) window.SMS.startWatch(function(){


      }, function(){
        console.log('failed to start watching');
      });

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

