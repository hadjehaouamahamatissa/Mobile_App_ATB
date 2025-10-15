import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { 
  arrowForward, 
  rocket, 
  shieldCheckmark, 
  people,
  home,
  grid,
  mail,
  menu 
} from 'ionicons/icons';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class IntroComponent {
  constructor() {
    addIcons({ 
      arrowForward, 
      rocket, 
      shieldCheckmark, 
      people,
      home,
      grid,
      mail,
      menu
    });
  }
}