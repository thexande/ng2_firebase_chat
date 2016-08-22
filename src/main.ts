import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase, AngularFire } from 'angularfire2'

if (environment.production) {
  enableProdMode();
}

const firebaseConfig = {
    apiKey: "AIzaSyCtx0g7VGy_5MmV45CZLFuLk3AtfI1yWis",
    authDomain: "ng2-chat-e2021.firebaseapp.com",
    databaseURL: "https://ng2-chat-e2021.firebaseio.com",
    storageBucket: "ng2-chat-e2021.appspot.com",
}


bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase(firebaseConfig),
  AngularFire
]);
