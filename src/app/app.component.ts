import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCdVF7rLDhVuRhy0SBFg9mlDmqKdaAEhy4",
      authDomain: "ng-project-999a1.firebaseapp.com"
    })
  }

}
