import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { IntroComponent } from './components/intro/intro.component';


import { addIcons } from 'ionicons';
import {
  logInOutline,
  personCircleOutline,
  checkmarkDoneOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IntroComponent],
})
export class AppComponent {
  constructor() {
    addIcons({ logInOutline, personCircleOutline, checkmarkDoneOutline });
  }
}
