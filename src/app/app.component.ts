import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-appli-angular';
  constructor() {
    const config = {
      apiKey: "AIzaSyC82eT5oPZtlwXcITRJGsVqHKBiy01Sca8",
      authDomain: "mon-appli-openclassroom-63.firebaseapp.com",
      databaseURL: "https://mon-appli-openclassroom-63.firebaseio.com",
      projectId: "mon-appli-openclassroom-63",
      storageBucket: "mon-appli-openclassroom-63.appspot.com",
      messagingSenderId: "990992207693"
    };
    firebase.initializeApp(config);
  }
}